import * as React from 'react';

import Task from '../components/Task';
import Login from '../components/Login/Login';

const tasksList = (tasks) => tasks.map((task) => (
  <Task task={task} key={task._id} />
));

const TasksLayout = ({tasks}) => (
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>

    <ul>
      {tasksList(tasks)}
    </ul>
    <Login />
  </div>
);

export default TasksLayout;
