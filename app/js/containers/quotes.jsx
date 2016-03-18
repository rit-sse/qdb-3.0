/*
 *View all tags on the QDB
 *Pass the QDB tag a list of tag strings
 *to display them.
 * */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Quote from '../components/quote';
import QuoteActions from '../components/quote-actions';
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
    this.renderQuotes = this.renderQuotes.bind(this);
  }

  componentDidMount() {
    const { query } = this.props.location;
    this.props.dispatch(getQuotes(query.page || 1, query.tag, query.search, query.approved || true));
  }

  componentWillReceiveProps(newProps) {
    const oldQuery = this.props.location.query;
    const newQuery = newProps.location.query;
    if (oldQuery.page !== newQuery.page || oldQuery.tag !== newQuery.tag || oldQuery.search !== newQuery.search || oldQuery.approved !== newQuery.approved) {
      this.props.dispatch(getQuotes(newQuery.page || 1, newQuery.tag, newQuery.search, newQuery.approved || true));
    }
  }

  header() {
    let header = 'Quotes';
    const { query } = this.props.location;
    if (query.tag) {
      header += ` for ${query.tag}`;
    } else if ( query.search ) {
      header += ` for ${query.search}`;
    } else if ( query.approved === 'null') {
      header += ' needing approval';
    }
    return header;
  }

  renderQuotes() {
    if (this.props.location.query.approved === 'null') {
      return this.props.quotes.list.map((quote, index) => {
        return (
          <div className='row' key={quote.id}>
            <div className='col-md-10'>
              <Quote quote={quote} />
            </div>
            <div className='col-md-2'>
              <QuoteActions quote={quote} dispatch={this.props.dispatch} index={index} />
            </div>
          </div>
        );
      });
    }
    return  this.props.quotes.list.map(quote => <Quote quote={quote} key={quote.id} />);
  }

  render() {
    return (
      <div>
        <div className='page-header'>
          <h1>{this.header()}</h1>
        </div>
        {this.renderQuotes()}
        <Pager quotes={this.props.quotes} query={this.props.location.query} pathname={this.props.location.pathname} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Quotes);
