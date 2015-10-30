'use strict';

import React, { Component } from 'react';

export default class CreateQuoteForm extends Component {
    render() {
      return(
          <form role='form'>
            <div className='form-group'>
                <label htmlFor='new-quote'>Enter your quote:</label>
                <textarea className='form-control qdb-input' rows='3' id='new-quote'></textarea>
                <label htmlFor='more-info'>Enter additional information about the quote, if any:</label>
                <textarea className='form-control qdb-input' rows='3' id='more-info' />
                <label htmlFor='tags-input'>Enter any tags (space deliniated):</label>
                <input className='form-control qdb-input' id='tags-input'></input>
                <button type='submit' className='btn btn-default qdb-input'>Submit</button>
            </div>
          </form>
        );
    }
}
