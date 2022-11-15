import React from 'react';
import { Route, Switch } from 'react-router-dom';
import lazy from './LazyComponent';
import PrivateRoute from './PrivateRoute';

const NoMatch = () => import('../components/Layout/404.js');

// 自动引入childRoutes目录里的子路由
const files = require.context('./childRoutes', false, /\.js$/);
const routeList = [];
let iframeRoutes = [];
files.keys().forEach((key) => {
  const child = files(key).default;
  if (!key.includes('iframeRouter')) {
    routeList.push(...child);
  } else {
    iframeRoutes = child;
  }
});

iframeRoutes.forEach((item0) => {
  const items = routeList.find((item1) => item1.path === item0.path);
  if (items) {
    Object.assign(items, item0);
  } else {
    routeList.push(item0);
  }
});

const SubRoute = () => {
  return (
    <Switch>
      {routeList.map((value) => {
        return (
          <PrivateRoute
            exact
            path={value.path}
            key={value.path}
            component={lazy(value.component)}
            isIframe={value.isIframe}
            id={value.id}
          />
        );
      })}
      <Route component={lazy(NoMatch)} key="NoMatch" />
    </Switch>
  );
};

export default SubRoute;
