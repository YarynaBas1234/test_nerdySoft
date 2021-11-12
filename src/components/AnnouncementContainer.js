import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import AnnouncementEdit from './AnnouncementEdit';
import { deleteAnnouncement } from '../actions/deleteAnnouncement';
import { similarAnnouncement } from '../actions/similarAnnouncement';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';

const useStyles = makeStyles({
    announcementContainer: {
        backgroundColor: '#d5d9dd',
        padding: 15,
        marginTop: 5,
    },

    announcementDate: {
        marginRight: 5,
        '& p': {
            margin: 0,
        }
    },

    buttonsContainer: {
        display: 'flex',
        float: 'right',
        width: 40,
        height: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleAnnouncement: {
        margin: 0,
        cursor: 'pointer',
    },

    btn: {
        fontSize: 20,
    },

    link: {
        textDecoration: 'none',
        color: 'black',
    }
})

const AnnouncementContainer = ({ elem, index, setShowSimilar, isOpen, setIsOpen }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    const deleteAnnouncementFunc = () => {
        dispatch(deleteAnnouncement(index));
    }

    const handleAnnouncement = () => {
        setIsOpen && setIsOpen(!isOpen);
        dispatch(similarAnnouncement(elem, index));
        setShowSimilar && setShowSimilar(!isOpen);
    }

    return (
        <Box className={classes.announcementContainer} key={elem + index}>
            {isEdit ?
                <AnnouncementEdit elem={elem} index={index} getIsEditValue={(value) => setIsEdit(value)} />
                :
                <>
                    <Box className={classes.buttonsContainer}>
                        <BiEdit className={!isOpen && classes.btn} onClick={() => setIsEdit(true)} />
                        <MdDeleteOutline className={!isOpen && classes.btn} onClick={deleteAnnouncementFunc} />
                    </Box>
                    <Link to={`/announcement/${elem.id}`} className={classes.link}>
                        <Box>
                            <h2 className={classes.titleAnnouncement} onClick={handleAnnouncement}>{elem.title}</h2>
                            {isOpen && <p>{elem.description}</p>}
                        </Box>
                        <Box className={classes.announcementDate}>
                            {isOpen && <p>{elem.date}</p>}
                        </Box>
                    </Link>
                </>
            }
        </Box>
    );
}

export default AnnouncementContainer;