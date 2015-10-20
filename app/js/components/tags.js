'use strict';

import React, { Component } from 'react';
import Tag from './tag';

export default class tags extends Component {
    render() {
      let tags = this.props.tags;
      tags.sort();
      return(
              <div>
              {tags.map(function makeTags(thisTag){
                return <Tag key={'qdb-tag-' + thisTag}  tag={thisTag} />;
                }) }
              </div>
        );
    }
}
