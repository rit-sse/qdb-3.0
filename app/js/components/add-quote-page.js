'use strict';

import React from 'react';

import Navbar from './navbar';
import QuoteForm from './new-quote-form';

export default class QuoteFormPage extends React.Component {
  render() {
    return(
        <div>
            <Navbar />
            <div className='container' id='qdb-content'>
                <div class="page-header">
                    <h1>Add a Quote</h1>
                    <hr />
                </div>
                <QuoteForm />
            </div>
        </div>);
  }
}
