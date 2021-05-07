import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '75vh',
  },
  btn: {
    margin: '10px',
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Container>
        <Typography variant="h1" color="secondary">
          Todo List App
        </Typography>
        <Typography variant="h6" color="secondary">
          Add new task to a list and delete task when task is completed
        </Typography>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/register"
        >
          Register
        </Button>
        <Button
          className={classes.btn}
          variant="contained"
          color="secondary"
          size="large"
          component={Link}
          to="/login"
        >
          Login
        </Button>
      </Container>
    </Container>
  );
};

export default Landing;
