'use strict';

import React from 'react';

import QuoteForm from './new-quote-form';

export default class QuoteFormPage extends React.Component {
  render() {
    return(
    <div>
        <div className='container' id='qdb-content'>
            <div className='page-header'>
                <h1>Add a Quote</h1>
            </div>
            <QuoteForm />
        </div>
    </div>);
  }
}
