'use strict';

import { createHistory, useBasename } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, { Route, IndexRoute, Router } from 'react-router';

import Navbar from './components/navbar';
import Quote from './components/quote';
import QDB from './components/qdb';
import TagsPage from './components/tags-page';
import QuoteFormPage from './components/add-quote-page';

const history = useBasename(createHistory)({ baseName: '/qdb' });

ReactDOM.render(
  <Router history={history} >
      <Route path='/qdb' component={QDB} />
      <Route path='/qdb/quotes' component={QDB} />
      <Route path='/qdb/tags' component={TagsPage} />
      <Route path='/qdb/add' component={QuoteFormPage} />
  </Router>
  , document.getElementById('app'));
