/*
*View all tags on the QDB
*Pass the QDB tag a list of tag strings
*to display them.
* */

'use strict';

import React from 'react';
import TagsList from './tags-list';

export default class TagsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tags: []};
  }

  componentDidMount() {
    this.getTagList();
  }

  componentDidUpdate() {
    this.getTagList();
  }

  getTagList() {
    // TODO: make this an api-client call
    const tagsRequest = new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', '/qdb/sample/tags.json');

      xhr.onload = () => {
        if (xhr.status == 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('an error has occured');
        }
      };

      xhr.send();
    });

    tagsRequest.then(tags => this.setState({...this.state, tags}));
  }

  render() {
    return(
      <div>
        <div className='container' id='qdb-content'>
          <div className='page-header'>
            <h1>Tags</h1>
          </div>
          <TagsList tags={this.state.tags} />
        </div>
      </div>);
  }
}
