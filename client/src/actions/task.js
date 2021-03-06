import axios from 'axios';
import { setAlert } from './alert';
import { GET_TASKS, ADD_TASK, DELETE_TASK, TASK_ERROR } from './types';

// Get tasks
export const getTasks = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/tasks');

    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add Task
export const addTask = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/tasks/', formData, config);

    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });

    dispatch(setAlert('Task Added', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Task
export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/tasks/${id}`);

    dispatch({
      type: DELETE_TASK,
      payload: id,
    });

    dispatch(setAlert('Task Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TASK_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
