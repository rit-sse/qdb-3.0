import {createHistory, useBasename} from 'history';

import QDB from './components/qdb';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, {Route, IndexRoute, Router} from 'react-router';

const history = useBasename(createHistory)({baseName: '/qdb'});

ReactDOM.render(
  <Router history={history} >
    <Route path='/qdb' component={QDB} />
  </Router>
  , document.getElementById('app')
);
