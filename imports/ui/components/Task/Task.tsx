import * as React from 'react';

require('./task.scss');

export default props => (<li className="task">{props.task.text}</li>);
