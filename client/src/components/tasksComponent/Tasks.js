import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks } from '../../actions/task';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Task from '../taskComponent/Task';

const useStyles = makeStyles({
  label: {
    marginTop: '10px',
  },
});

const Tasks = ({ getTasks, auth: { user, loading }, task: { tasks } }) => {
  useEffect(() => {
    getTasks();
  }, [getTasks]);
  const classes = useStyles();
  return (
    <Fragment>
      {!loading && tasks.length !== 0 ? (
        tasks
          .filter((task) => task.user === user._id)
          .map((task) => <Task key={task._id} task={task} />)
      ) : (
        <Typography className={classes.label} variant="h4">
          No task to show...
        </Typography>
      )}
    </Fragment>
  );
};

Tasks.propTypes = {
  getTasks: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  task: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  task: state.task,
});

export default connect(mapStateToProps, { getTasks })(Tasks);
