import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const useStyles = makeStyles({
    fieldContainer: {
        '& > :not(style)': {
            margin: 3,
        },
    },

    label: {
        paddingLeft: 5,
    },
});


const BasicInput = ({ label, onChange, value, defaultValue }) => {
    const classes = useStyles();

    return (
        <Box
            sx={{
                '& > :not(style)': { width: '100%' },
            }}
            className={classes.fieldContainer}
        >
            <p className={classes.label}>{label}</p>
            <TextField multiline rows={4} value={value} defaultValue={defaultValue} onChange={onChange} className={classes.textField} />
        </Box>
    );
}

export default BasicInput;