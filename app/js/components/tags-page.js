/*
*View all tags on the QDB
*Pass the QDB tag a list of tag strings
*to display them.
* */

'use strict';

import React from 'react';

import Navbar from './navbar';
import Tags from './tags';

export default class QDB extends React.Component {
  render() {
    return(
        <div>
            <div className='container' id='qdb-content'>
                <div className='page-header'>
                  <h1>Tags</h1>
                </div>
                <Tags tags={this.props.tags} />
            </div>
        </div>);
  }
}
