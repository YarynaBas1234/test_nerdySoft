import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import BasicInput from './elements/BasicInput';
import BasicButton from './elements/BasicButton';
import { editAnnouncement } from '../actions/editAnnouncement';
import BasicTextField from './elements/BasicTextField';

const useStyles = makeStyles({
    btn: {
        margin: '3px !important',
    }
})

const AnnouncementEdit = ({ elem, index, getIsEditValue }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const [title, setTitle] = useState(elem.title);
    const [desc, setDesc] = useState(elem.description);

    const saveСhanges = () => {
        if(title !== '' && desc != ''){
            dispatch(editAnnouncement(title, desc, index));
            getIsEditValue(false);
        }
    }

    return (
        <>
            <BasicInput
                label={'Title'}
                defaultValue={elem.title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <BasicTextField
                label={'Description'}
                defaultValue={elem.description}
                onChange={(e) => setDesc(e.target.value)}
            />
            <BasicButton value={'Save'} stylesButton={classes.btn} onClick={saveСhanges} />
            <BasicButton value={'Cancel'} onClick={() => getIsEditValue(false)} />
        </>
    );
}

export default AnnouncementEdit;