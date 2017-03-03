import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

export const tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  Meteor.publish('tasks', function tasksPublication() {
    return tasks.find();
  });
}
