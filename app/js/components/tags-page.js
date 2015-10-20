'use strict';

import React from 'react';

import Navbar from './navbar';
import Tags from './tags';

export default class QDB extends React.Component {
  render() {
    return(
        <div>
            <Navbar />
            <div className='container' id='qdb-content'>
                <Tags tags={['a', 'b', 'dog', 'c', 'cat', 'cow']} />
            </div>
        </div>);
  }
}
