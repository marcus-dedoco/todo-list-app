import React, { useState } from 'react';

import Header from "./components/headerComponent/Header";
import AddTask from "./components/addTaskComponent/AddTask";
import Tasks from "./components/tasksComponent/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'React.js Frontend',
    },
    {
        id: 2,
        text: 'MongoDB',
    },
    {
        id: 3,
        text: 'Express.js / Nest.js',
    },
    {
        id: 4,
        text: 'JWT Authorization',
    }
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks}  onDelete={deleteTask} /> : 'No Task to show...'}
    </div>
  );
}

export default App;
