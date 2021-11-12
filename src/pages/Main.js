import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import AddAnnouncementForm from '../components/AddAnnouncementForm';
import AnnouncementContainer from '../components/AnnouncementContainer';
import BasicButton from '../components/elements/BasicButton';
import SearchInput from '../components/elements/SearchInput';
import { searchAnnouncement } from '../actions/searchSmilar';
import { resetAnnouncement } from '../actions/resetAnnouncement';

const useStyles = makeStyles({
    menu: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 10,
    },

    hide: {
        display: 'none',
    },
})

const Main = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { announcement } = useSelector(state => state);
    const [showAddMenu, setShowAddMenu] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [showSimilar, setShowSimilar] = useState(false);
    const [isOpenAnnouncement, setIsOpenAnnouncement] = useState(false);

    useEffect(() => {
        if (showSimilar) {
            setShowAddMenu(false);
        }
    }, [showSimilar])

    const visibleAnnouncement = announcement.map((elem, index) => {
        if (elem.visible === true) {
            return <AnnouncementContainer elem={elem} index={index} setShowSimilar={setShowSimilar} isOpen={isOpenAnnouncement} setIsOpen={setIsOpenAnnouncement} />
        }
    })

    const fadeBox = <Fade in={showAddMenu}>
        <Box className={!showAddMenu && classes.hide}>
            <AddAnnouncementForm setShowAddMenu={setShowAddMenu} valueButton={'Add'} />
        </Box>
    </Fade>

    const handleReset = () => {
        setSearchValue('');
        dispatch(resetAnnouncement());
    }

    return (
        <>
            <Box className={classes.menu}>
                <BasicButton value={'Add Announcement'} onClick={() => setShowAddMenu(!showAddMenu)} />
                <SearchInput searchFunc={() => dispatch(searchAnnouncement(searchValue))} getSearchValue={(value) => setSearchValue(value)} searchValue={searchValue} />
                <BasicButton value={'Reset'} onClick={handleReset} />
            </Box>
            {fadeBox}
            {visibleAnnouncement}
        </>
    )
}

export default Main;