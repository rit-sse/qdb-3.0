'use strict';

import React, { Component } from 'react';

export default class Tag extends Component {
    render() {
      return(
            <button className='qdb-tag-button btn btn-primary btn-sm' id='tag-{this.props.tag}'>{this.props.tag}</button>
        );
    }
}
