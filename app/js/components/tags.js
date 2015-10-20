'use strict';

import React, { Component } from 'react';
import Tag from './tag';

export default class Tags extends Component {
    render() {
      let tags = this.props.tags;
      if (typeof tags !== 'undefined') {
        tags.sort();
      } else {
        tags = [];
      }
      return(
              <div>
              {tags.map(function makeTags(thisTag) {
                return <Tag key={'qdb-tag-' + thisTag}  tag={thisTag} />;
              })}
              </div>
        );
    }
}
