import React from 'react';
import { Link } from 'react-router';

export default class Pager extends React.Component {
  constructor() {
    super();

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }
  previous() {
    let className = 'previous';
    if (parseInt(this.props.page, 10) === 1) {
      className += ' disabled';
    }

    return className;
  }

  next() {
    let className = 'next';
    if (this.props.quotes.list.length === this.props.quotes.pageSize) {
      className += ' disabled';
    }
    return className;
  }

  render() {
    const pathname = this.props.pathname;
    const page = parseInt(this.props.page, 10);
    return (
      <ul className='pager'>
        <li className={this.previous()}>
          <Link to={{ pathname, query: { page: page - 1 } }} >
            <span aria-hidden='true'>&larr;</span> Older
          </Link>
        </li>
        <li className={this.next()}>
          <Link to={{ pathname, query: { page: page + 1 } }} >
            Newer <span aria-hidden='true'>&rarr;</span>
          </Link>
        </li>
      </ul>
    );
  }
}
