import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import {
  MainFrame,
  SubFrame,
  HomePage,
  ServicePage,
  UserPage,
} from './routes';

// import { UserIsAuthenticated, UserIsAdmin } from './utils/wrappers.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={MainFrame} >
        <IndexRoute component={HomePage} />
        <Route path="service" component={ServicePage} />
        <Route path="user" component={UserPage} />
        {/* <Route path="app" component={MenuFrame}> */}
        {/* <IndexRoute component={UserIsAuthenticated(UserIndexPage)} />
          <Route path="role" component={UserIsAuthenticated(RoleSettingPage)} />
          <Route path="userRole" component={UserIsAuthenticated(UserRoleSettingPage)} />
          <Route path="admin" component={UserIsAuthenticated(UserIsAdmin(AdminPage))} /> */}
        {/* </Route> */}
      </Route>
      <Route path="app" component={SubFrame}>
        <Route path="home" component={HomePage} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
