import React, { Component } from 'react';
import { Link } from 'react-router';
import LogIn from './log-in';
import { signOut } from '../actions/auth';

export default class Navbar extends Component {
  constructor() {
    super();

    this.renderLogIn = this.renderLogIn.bind(this);
  }
  renderLogIn() {
    if (!this.props.auth.signedIn) {
      return (
        <li>
          <LogIn key='login' dispatch={this.props.dispatch} />
        </li>
      );
    }
    return (
      <li>
        <a
          id='sign-out'
          key='logout'
          href='#'
          onClick={() => this.props.dispatch(signOut())}
          >
          Sign Out
        </a>
      </li>
    );
  }

  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top navbar-inverse'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-collapse' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <i className='fa fa-bars fa-lg' />
            </button>
            <Link className='navbar-brand qdb-nav-item' to='/qdb/quotes'>
              <img alt='small-logo' className='qdb-nav-item' id='qdb-logo' src='/qdb/images/small-logo.png' />
              <p className='qdb-nav-item' id='qdb-title'>SSE QDB</p>
            </Link>
          </div>

          <div className='collapse navbar-collapse' id='navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className=''><Link to='/qdb/quotes'>Quotes</Link></li>
              <li><Link to='/qdb/tags/'>Tags</Link></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              {this.renderLogIn()}
            </ul>
            <form className='navbar-form navbar-right' role='search'>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Search' />
              </div>
            </form>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/qdb/add'>
                  <span className='fa fa-pencil' aria-hidden='true' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
