import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { tasks } from '../../api/tasks';
import TasksLayout from '../layouts/TasksLayout';

interface ITasksProps {
    tasks: any[];
}

export class TasksContainer extends React.Component<ITasksProps, any> {
  get fakeTasks() {
    return [
      { _id: 1, text: 'This is task 1' },
      { _id: 2, text: 'This is task 2' },
      { _id: 3, text: 'This is task 3' },
    ];
  }

  get tasks() {
    return (this.props.tasks.length) ? this.props.tasks : this.fakeTasks;
  }

  render() {
    return (
      <TasksLayout tasks={this.tasks} />
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('tasks');
  return {
    tasks: tasks.find({}).fetch(),
  };
}, TasksContainer);
