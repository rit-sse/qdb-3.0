import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import QDB from './containers/qdb';
import Tags from './containers/tags';
import QuoteFormPage from './components/add-quote-page';
import Quotes from './containers/quotes';

export default (
  <Route path='/qdb' component={QDB}>
    <Route path='/qdb/tags' component={Tags} />
    <Route path='/qdb/add' component={QuoteFormPage} />
    <Route path='/qdb/quotes' component={Quotes} />
    <IndexRedirect from='/qdb' to='/qdb/quotes' />
  </Route>
);
