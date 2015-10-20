'use strict';

import React, { Component } from 'react';

export default class QuoteForm extends Component {
    render() {
      const tags = this.props.tags;
      return(
          <form role='form'>
            <div class='form-group'>
                <label for='new-quote'>Enter your quote:</label>
                <textarea className='form-control qdb-input' rows='3' id='new-quote'></textarea>
                <label for='more-info'>Enter additional information about the quote, if any:</label>
                <textarea className='form-control qdb-input' rows='3' id='more-info' />
                <label for='tags-input'>Enter any tags (space deliniated):</label>
                <input className='form-control qdb-input' id='tags-input'></input>
                <button type="submit" className="btn btn-default qdb-input">Submit</button>
            </div>
          </form>
        );
    }
}
