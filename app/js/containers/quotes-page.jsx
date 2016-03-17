/*
 *View all tags on the QDB
 *Pass the QDB tag a list of tag strings
 *to display them.
 * */

import React from 'react';
import { connect } from 'react-redux';

import Quote from '../components/quote';
import Pager from '../components/pager';
import { getQuotes } from '../actions/quotes';

function mapStateToProps(state) {
  return {
    quotes: state.quotes,
  };
}

class Quotes extends React.Component {

  componentDidMount() {
    const { query } = this.props.location;
    const { tag } = this.props.params;
    this.props.dispatch(getQuotes(query.page || 1, tag));
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.query.page !== newProps.location.query.page) {
      const { query } = newProps.location;
      const { tag } = newProps.params;
      this.props.dispatch(getQuotes(query.page || 1, tag));
    }
  }

  render() {
    return (
      <div className='container' id='qdb-content'>
        <div className='page-header'>
          <h1>Quotes</h1>
        </div>
        {this.props.quotes.list.map(quote => <Quote quote={quote} key={quote.id}/> )}
        <Pager quotes={this.props.quotes} page={this.props.location.query.page ||1} pathname={this.props.location.pathname} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Quotes);
