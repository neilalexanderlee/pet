import React from 'react';
import { Router, Route } from 'dva/router';
import {
  IndexPage } from './routes';
// import { UserIsAuthenticated, UserIsAdmin } from './utils/wrappers.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} >
        {/* <IndexRoute component={IndexPage} /> */}
        {/* <Route path="login" component={LoginPage} />
        <Route path="register" component={RegistrationPage} /> */}
        {/* <Route path="app" component={MenuFrame}> */}
        {/* <IndexRoute component={UserIsAuthenticated(UserIndexPage)} />
          <Route path="role" component={UserIsAuthenticated(RoleSettingPage)} />
          <Route path="userRole" component={UserIsAuthenticated(UserRoleSettingPage)} />
          <Route path="admin" component={UserIsAuthenticated(UserIsAdmin(AdminPage))} /> */}
        {/* </Route>*/}
      </Route>
    </Router>
  );
}

export default RouterConfig;
