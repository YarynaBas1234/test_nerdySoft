import * as React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@mui/material/Button';
import clsx from 'clsx';

const useStyles = makeStyles({
    btnFilterArbitrage: {
        backgroundColor: '#2e4157 !important',

        '&.css-sghohy-MuiButtonBase-root-MuiButton-root': {
            borderRadius: '10px !important',
            textTransform: 'none !important',
        },
    },
});

const SimpleButton = ({ value, onClick, stylesButton }) => {
    const classes = useStyles();

    return (
        <Button variant='contained' onClick={onClick} className={clsx(stylesButton, classes.btnFilterArbitrage)}>{value}</Button>
    );
}

export default SimpleButton;