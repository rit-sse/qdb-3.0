import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
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
            <form className='navbar-form navbar-right' role='search'>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Search' />
              </div>
            </form>
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <Link to='/qdb/add'>
                  <span className='glyphicon glyphicon-pencil' aria-hidden='true' />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
