/*
*View all tags on the QDB
*Pass the QDB tag a list of tag strings
*to display them.
* */

'use strict';

import React from 'react';

import TagsList from './tags-list';

export default class QDB extends React.Component {
  render() {
    return(
      <div>
        <div className='container' id='qdb-content'>
          <div className='page-header'>
            <h1>Tags</h1>
          </div>
          <TagsList tags={this.props.tags} />
        </div>
      </div>);
  }
}
