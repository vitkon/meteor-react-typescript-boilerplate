import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

import '../imports/api/tasks';

Meteor.startup(() => {
  const adminUser = Meteor.users.findOne({ username: 'admin' });
  if (!adminUser) {
    console.warn(
      `WARNING: Creating default admin user. 
      Log in as \'admin@example.org\' with password \'secret\' and change the password!`
    );

    const userId = Accounts.createUser({
      email: 'admin@example.org',
      password: 'secret',
      username: 'admin',
    });

    Roles.addUsersToRoles(userId, ['admin']);
  }
});
