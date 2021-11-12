import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    fieldContainer: {
        '& > :not(style)': {
            margin: 3,
        },
    },

    label: {
        paddingLeft: 5,
    },

    textField: {
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            padding: '0 10px !important',
            height: '35px !important',
        }
    }
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
            <TextField value={value} defaultValue={defaultValue} onChange={onChange} className={classes.textField} />
        </Box>
    );
}

export default BasicInput;