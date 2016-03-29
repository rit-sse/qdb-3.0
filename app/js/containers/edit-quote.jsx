import React, { Component } from 'react';
import { connect } from 'react-redux';

import QuoteForm from '../components/quote-form';
import { getTags } from '../actions/tags';
import { updateQuote } from '../actions/quotes';

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
          <h1>Edit a Quote</h1>
        </div>
        <QuoteForm {...this.props} submit={updateQuote} quoteId={this.props.params.id}/>
      </div>
    );
  }
}

export default connect(mapStateToProps)(AddQuote);
