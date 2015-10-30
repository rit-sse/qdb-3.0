'use strict';

import React from 'react';

import Navbar from './navbar';

export default class QDB extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        {this.props.children}
      </div>);
  }
}
