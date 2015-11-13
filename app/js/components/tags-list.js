'use strict';

import React, { Component } from 'react';
import Tag from './tag';

export default class TagList extends Component {
  render() {
    const tags = this.props.tags || [];
    tags.sort();
    const tagElements = tags.map(tag => <Tag key={'qdb-tag-' + tag.name}  tag={tag} /> );
    return(
      <div>
        {tagElements}
      </div>
    );
  }
}
