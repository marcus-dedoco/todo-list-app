import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
    input: {
        display: 'block',
        paddingBottom: 10,
    }
});

const AddTask = ({ onAdd }) => {
    const classes = useStyles();

    const [text, setText] = useState('');
    const [textError, setTextError] = useState(false);
    const [textErrorHelper, setTextErrorHelper] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        setTextError(false);
        setTextErrorHelper('');

        if(!text) {
            setTextError(true);
            setTextErrorHelper("Please enter a task");
            return;
        }

        onAdd({ text });

        setText('');
    }

    return (
        <Container>
            <form 
                noValidate 
                autoComplete="off" 
                onSubmit={onSubmit}
            >
                <TextField 
                    className={classes.input}
                    type="text" 
                    label="What task do you want to do?" 
                    variant ="outlined" 
                    color="secondary" 
                    fullWidth
                    required
                    onChange={(e) => setText(e.target.value)}
                    error={textError} 
                    helperText={textErrorHelper}
                />
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="secondary" 
                    endIcon={<AddCircleIcon />} 
                    fullWidth 
                    onClick={onSubmit}
                >
                    Add Task
                </Button>
            </form>
        </Container>
    )
}

export default AddTask
