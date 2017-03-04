import * as React from 'react';

import Task from '../components/Task';
import Login from '../components/Login/Login';

const TasksLayout = props => (
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>

    <ul>
      {props.tasks.map(task => (
        <Task task={task} key={task._id} />
      ))}
    </ul>
    <Login />
  </div>
);

export default TasksLayout;
