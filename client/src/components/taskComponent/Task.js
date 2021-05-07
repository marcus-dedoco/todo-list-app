import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { IconButton } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

import formatDate from '../../utils/formatDate';

import { deleteTask } from '../../actions/task';

const Task = ({ deleteTask, auth, task: { _id, text, date, user } }) => {
  return (
    <Container>
      <Card>
        <CardHeader
          action={
            !auth.loading &&
            user === auth.user._id && (
              <IconButton
                onClick={(e) => {
                  deleteTask(_id);
                }}
              >
                <DeleteOutlined color="secondary" />
              </IconButton>
            )
          }
          title={text}
          subheader={'Task added on: ' + formatDate(date)}
        />
      </Card>
    </Container>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteTask })(Task);
