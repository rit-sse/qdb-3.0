/*
*View all tags on the QDB
*Pass the QDB tag a list of tag strings
*to display them.
* */

import React from 'react';
import { connect } from 'react-redux';

import Tag from '../components/tag';
import { getTags } from '../actions/tags';

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}

class Tags extends React.Component {
  componentDidMount() {
    this.props.dispatch(getTags());
  }

  render() {
    return (
      <div>
        <div className='container' id='qdb-content'>
          <div className='page-header'>
            <h1>Tags</h1>
          </div>
          {this.props.tags.map(tag => <Tag tag={tag} />)}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Tags);
