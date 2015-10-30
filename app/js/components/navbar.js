'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
    render() {
      return(
        <div className='navbar navbar-default navbar-fixed-top navbar-inverse' toggleNavKey={0}>
            <div className='container'>
                <div className='navbar-header'>
                    <Link className='navbar-brand qdb-nav-item' to='/qdb/quotes'>
                        <img alt='small-logo' className='qdb-nav-item' id='qdb-logo' src='/qdb/images/small-logo.png' />
                        <p className='qdb-nav-item' id='qdb-title'>SSE QDB</p>
                    </Link>
                    <div className='collapse navbar-collapse qdb-nav-item' id='bs-example-navbar-collapse-1'>
                          <ul className='nav navbar-nav'>
                              <li className=''><Link to='/qdb/quotes'>Quotes</Link></li>
                              <li><Link to='/qdb/tags/'>Tags</Link></li>
                          </ul>
                     </div> {/* /navbar-collapse */}
                </div> {/* /navbar-header */}
                <div className='navbar-right'>
                    <form className='navbar-form navbar-left' role='search'>
                      <div className='form-group'>
                          <input type='text' className='form-control' placeholder='Search' />
                      </div>
                    </form>
                    <div className='collapse navbar-collapse qdb-nav-item' id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav'>
                            <li><Link to='/qdb/add'>
                                <span className='glyphicon glyphicon-pencil' aria-hidden='true'></span>
                            </Link></li>
                        </ul>
                    </div> {/* /navbar-collapse */}
                </div> {/* /navbar-right */}
            </div> {/* /container */}
        </div>
        );
    }
}
