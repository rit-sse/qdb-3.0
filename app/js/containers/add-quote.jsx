import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuoteForm from '../components/quote-form';
import { getTags } from '../actions/tags';
import { addQuote } from '../actions/quotes';

function mapStateToProps(state) {
  return {
    tags: state.tags,
  };
}

class AddQuote extends Component {
  componentDidMount() {
    this.props.dispatch(getTags());
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <h1>Add a Quote</h1>
        </div>
        <QuoteForm {...this.props} submit={addQuote}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddQuote);
