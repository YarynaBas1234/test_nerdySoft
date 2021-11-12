import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import BasicInput from './elements/BasicInput';
import BasicButton from './elements/BasicButton';
import { addAnnouncement } from '../actions/addAnnouncement';

const useStyles = makeStyles({
    stylesButton: {
        width: '100%',
        margin: '3px 0 3px 0 !important',
    }
})

const AddAnnouncementForm = ({ setShowAddMenu, valueButton }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(); 

    const addAnnouncementFunc = () => {
        if (title !== '' && desc !== '') {
            dispatch(addAnnouncement(title, desc, date));
            setShowAddMenu(false);
        }
        setTitle('');
        setDesc('');
    }

    return (
        <>
            <BasicInput
                label={'Title'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <BasicInput
                label={'Description'}
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
            />
            <BasicButton
                value={valueButton}
                stylesButton={classes.stylesButton}
                onClick={addAnnouncementFunc}
            />
        </>
    );
}
export default AddAnnouncementForm;