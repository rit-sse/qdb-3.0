import React, { Component } from 'react';

import { approveQuote } from '../actions/quotes';

export default class QuoteActions extends Component {
  constructor() {
    super();

    this.approveQuote = this.approveQuote.bind(this);
    this.denyQuote = this.denyQuote.bind(this);
  }

  approveQuote() {
    this.props.dispatch(approveQuote(this.props.quote, this.props.index, true));
  }

  denyQuote() {
    this.props.dispatch(approveQuote(this.props.quote, this.props.index, false));
  }

  render() {
    return (
      <div className='btn-group-vertical' role='group' aria-label='Quote Actions'>
        <button className='btn btn-success' onClick={this.approveQuote}>Approve</button>
        <button className='btn btn-warning'>Edit</button>
        <button className='btn btn-danger' onClick={this.denyQuote}>Deny</button>
      </div>
    );
  }
}
