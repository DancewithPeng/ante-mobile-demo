import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ButtonPage from './routes/ButtonPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/button" component={ButtonPage} />
    </Router>
  );
}

export default RouterConfig;
