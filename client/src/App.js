import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Header from "./components/headerComponent/Header";
import AddTask from "./components/addTaskComponent/AddTask";
import Tasks from "./components/tasksComponent/Tasks";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  noTask: {
    marginTop: 20,
  }
});

function App() {
  const classes = useStyles();

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      try {
        const config = {
          header: {
            'Content-Type': 'application/json'
          }
        }

        const res = await axios.get('/api/tasks', config);
        setTasks(res.data);
      } catch (err) {
        console.error(err.response);
      }
    }
    fetchTasks();
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    async function addTask() {
      try {
        const config = {
          header: {
            'Content-Type': 'application/json'
          }
        }

        const res = await axios.post('/api/tasks', task, config);
        console.log(res);
      } catch (err) {
        console.error(err.response);
      }
    }
    addTask();
  }

  // Delete Task
  const deleteTask = (id) => {
    async function deleteTask() {
      try {
        const res = await axios.delete(`/api/tasks/${id}`);
        console.log(res);
      } catch (err) {
        console.error(err.response);
      }
    }
    deleteTask();
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? 
        <Tasks tasks={tasks}  onDelete={deleteTask} /> :       
        <Typography 
          className={classes.noTask}
          variant="h6" 
          component="h6" 
          gutterBottom 
          color="initial" 
          align="center"
        >
          No Task to Show...
        </Typography>
      }
    </div>
  );
}

export default App;
