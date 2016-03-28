import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Tag extends Component {
  render() {
    return (
      <Link to={{ pathname: '/qdb/quotes', query: { tag: this.props.tag.name } }}>
        <button className='qdb-tag-button btn btn-primary btn-sm' id='this.props.tags.name'>{this.props.tag.name}</button>
      </Link>
    );
  }
}
