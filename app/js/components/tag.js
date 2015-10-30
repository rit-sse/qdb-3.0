'use strict';

import React, { Component } from 'react';

export default class Tag extends Component {
    render() {
      const name = this.props.tag.name;

      return(
        <button className='qdb-tag-button btn btn-primary btn-sm' id={`qdb-tag-${name}`}>{name}</button>
      );
    }
}
