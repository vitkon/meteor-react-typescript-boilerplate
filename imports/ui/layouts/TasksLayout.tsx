import * as React from 'react';

import Task from '../components/Task';

export default props => (
  <div className="container">
    <header>
      <h1>Todo List</h1>
    </header>

    <ul>
      {props.tasks.map(task => (
        <Task key={task._id} task={task} />
      ))}
    </ul>
  </div>
);
