'use strict';

import React from 'react';

import Navbar from './navbar';
import Quote from './quote';

export default class QDB extends React.Component {
  render() {
    return(
        <div>
            <Navbar />
            <div className='container' id='qdb-content'>
                <div className='page-header'>
                    <h1>Quotes</h1>
                    <hr />
                </div>
                <Quote
                    qdbid='1129'
                    quoteText='Hello World with React!'
                    smallText='Hello World subtext!'
                    tags={['this tag', 'this other tag', 'and also this one']}
                />
            </div>
        </div>);
  }
}
