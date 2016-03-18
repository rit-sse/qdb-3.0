import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import QDB from './containers/qdb';
import Tags from './containers/tags';
import AddQuote from './containers/add-quote';
import Quotes from './containers/quotes';

export default (
  <Route path='/qdb' component={QDB}>
    <Route path='/qdb/tags' component={Tags} />
    <Route path='/qdb/add' component={AddQuote} />
    <Route path='/qdb/quotes' component={Quotes} />
    <IndexRedirect from='/qdb' to='/qdb/quotes' />
  </Route>
);
