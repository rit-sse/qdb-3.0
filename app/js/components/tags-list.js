'use strict';

import React, { Component } from 'react';
import Tag from './tag';

export default class TagsList extends Component {
    render() {
      let tags = this.props.tags || [];
      tags.sort();
      let tagElements = tags.map((thisTag) => <Tag key={'qdb-tag-' + thisTag}  tag={thisTag} /> );
      return(
              <div>
                {tagElements}
              </div>
        );
    }
}
