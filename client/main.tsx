import { Meteor } from 'meteor/meteor';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';
import routes from '../imports/ui/routes';

Meteor.startup(() => {
  ReactRouterSSR.Run(
    routes,
  );
});
