import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import AddTask from '../addTaskComponent/AddTask';
import Tasks from '../tasksComponent/Tasks';

const useStyles = makeStyles({
  tasks: {
    textAlign: 'center',
  },
  label: {
    marginBottom: '10px',
  },
});

const Dashboard = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.tasks}>
      <Typography className={classes.label} variant="h1" color="secondary">
        Task List
      </Typography>
      <Typography className={classes.label} variant="h6">
        Add task and delete once task completed
      </Typography>
      <AddTask />
      <Tasks />
    </Container>
  );
};

export default Dashboard;
