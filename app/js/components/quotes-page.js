/*
*View all tags on the QDB
*Pass the QDB tag a list of tag strings
*to display them.
* */

'use strict';

import React from 'react';

import TagsList from './tags-list';
import Quote from './quote';

export default class QuotesPage extends React.Component {
    render() {
      let quoteslist = this.props.quotes;
      if (typeof quoteslist === 'undefined') {
        quoteslist = [];
      }
      return(
        <div>
            <div className='container' id='qdb-content'>
                <div className='page-header'>
                  <h1>Quotes</h1>
                </div>
                    {quoteslist.map(function putQuotes(thisQuote) {
                      return <Quote quoteText={thisQuote.quoteText} smallText={thisQuote.smallText} tags={thisQuote.tags}  />;
                    })}
                </div>
                <TagsList tags={this.props.tags} />
            </div>);
    }
}
