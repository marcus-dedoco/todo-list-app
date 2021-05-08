import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTask } from '../../actions/task';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles({
  input: {
    display: 'block',
    paddingBottom: 10,
  },
});

const AddTask = ({ addTask }) => {
  const classes = useStyles();

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    addTask({ text });

    setText('');
  };

  return (
    <Container>
      <form autoComplete="off" onSubmit={onSubmit}>
        <TextField
          className={classes.input}
          variant="outlined"
          color="secondary"
          fullWidth
          required
          type="text"
          label="What task do you want to do?"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          endIcon={<AddCircleIcon />}
          fullWidth
        >
          Add Task
        </Button>
      </form>
    </Container>
  );
};

addTask.PropTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(null, { addTask })(AddTask);
