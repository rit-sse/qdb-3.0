'use strict';

import { createHistory, useBasename } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRedirect } from 'react-router';

import QDB from './components/qdb';
import TagsPage from './components/tags-page';
import QuoteFormPage from './components/add-quote-page';
import QuotesPage from './components/quotes-page';

const history = useBasename(createHistory)({ baseName: '/qdb' });

ReactDOM.render(
  <Router history={history} >
      <Route path='/qdb' component={QDB}>
          <Route path='/qdb/tags' component={TagsPage} />
          <Route path='/qdb/add' component={QuoteFormPage} />
          <Route path='/qdb/quotes' component={QuotesPage} />
          <IndexRedirect from='/qdb' to='/qdb/quotes' />
      </Route>
  </Router>
  , document.getElementById('app'));
