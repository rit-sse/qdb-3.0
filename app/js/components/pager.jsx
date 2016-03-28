import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Pager extends Component {
  constructor() {
    super();

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  previous() {
    let className = 'previous';
    if (parseInt(this.props.query.pagei || 1, 10) === 1) {
      className += ' disabled';
    }

    return className;
  }

  next() {
    let className = 'next';
    if (this.props.quotes.list.length === this.props.quotes.perPage ||
        this.props.quotes.total < this.props.quotes.perPage) {
      className += ' disabled';
    }
    return className;
  }

  render() {
    const pathname = this.props.pathname;
    const page = parseInt(this.props.query.page || 1, 10);
    const nextQuery = Object.assign({}, this.props.query, {
      page: page + 1,
    });
    const previousQuery = Object.assign({}, this.props.query, {
      page: page - 1,
    });
    return (
      <ul className='pager'>
        <li className={this.previous()}>
          <Link to={{ pathname, query: previousQuery }} >
            <span aria-hidden='true'>&larr;</span> Older
          </Link>
        </li>
        <li className={this.next()}>
          <Link to={{ pathname, query: nextQuery }} >
            Newer <span aria-hidden='true'>&rarr;</span>
          </Link>
        </li>
      </ul>
    );
  }
}
