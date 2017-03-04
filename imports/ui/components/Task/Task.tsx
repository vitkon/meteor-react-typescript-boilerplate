import * as React from 'react';

require('./task.scss');

const Task = props => (
  <li className="task">
    {props.task.text}
  </li>
);

export default Task;
