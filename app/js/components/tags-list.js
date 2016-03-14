import React, { Component } from 'react';
import Tag from './tag';

export default class TagList extends Component {
  render() {
    const tags = this.props.tags || [];
    tags.sort();
    const tagElements = tags.map(thisTag => <Tag key={'qdb-tag-' + thisTag}  tag={thisTag} /> );
    return <div>{tagElements}</div>;
  }
}
