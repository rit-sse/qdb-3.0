/*
 *View all tags on the QDB
 *Pass the QDB tag a list of tag strings
 *to display them.
 * */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Quote from '../components/quote';
import Pager from '../components/pager';
import { getQuotes } from '../actions/quotes';

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
  };
}

class Quotes extends Component {

  constructor() {
    super();

    this.header = this.header.bind(this);
  }

  componentDidMount() {
    const { query } = this.props.location;
    this.props.dispatch(getQuotes(query.page || 1, query.tag, query.search));
  }

  componentWillReceiveProps(newProps) {
    const oldQuery = this.props.location.query;
    const newQuery = newProps.location.query;
    if (oldQuery.page !== newQuery.page ||
        oldQuery.tag !== newQuery.tag ||
        oldQuery.search !== newQuery.search ) {
      this.props.dispatch(getQuotes(newQuery.page || 1, newQuery.tag, newQuery.search));
    }
  }

  header() {
    let header = 'Quotes';
    const { query } = this.props.location;
    if (query.tag) {
      header += ` for ${query.tag}`;
    } else if ( query.search ) {
      header += ` for ${query.search}`;
    }
    return header;
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <h1>{this.header()}</h1>
        </div>
        {this.props.quotes.list.map(quote => <Quote quote={quote} key={quote.id}/> )}
        <Pager quotes={this.props.quotes} query={this.props.location.query} pathname={this.props.location.pathname} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Quotes);
