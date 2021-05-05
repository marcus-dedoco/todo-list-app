import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    h1: {
        backgroundColor: '#f50057',
        color: '#fff',
        textAlign: 'left',
        padding: 10,
    }
});

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography 
                className={classes.h1} 
                variant="h4" 
                component="h1" 
                gutterBottom 
                color="initial" 
                align="center"
            >
                Todo List App
            </Typography>
        </div>
    )
}

export default Header
