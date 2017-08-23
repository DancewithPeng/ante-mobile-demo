import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ButtonPage from './routes/ButtonPage'
import ListViewPage from './routes/ListViewPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/button" component={ButtonPage} />
      <Route path="/listview" component={ListViewPage} />
    </Router>
  );
}

export default RouterConfig;
