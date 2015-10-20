'use strict';

import React from 'react';

import Navbar from './navbar';
import Quote from './quote';

export default class QDB extends React.Component {
  render() {
    return(
        <div>
            <Navbar />
               {this.props.children}
        </div>);
  }
}
