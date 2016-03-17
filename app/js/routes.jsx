import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import QDB from './components/qdb';
import TagsPage from './components/tags-page';
import QuoteFormPage from './components/add-quote-page';
import QuotesPage from './containers/quotes-page';

export default (
  <Route path='/qdb' component={QDB}>
    <Route path='/qdb/tags' component={TagsPage} />
    <Route path='/qdb/add' component={QuoteFormPage} />
    <Route path='/qdb/quotes' component={QuotesPage} />
    <IndexRedirect from='/qdb' to='/qdb/quotes' />
  </Route>
);
