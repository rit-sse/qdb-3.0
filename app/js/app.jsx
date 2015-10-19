import {createHistory, useBasename} from 'history';

import React from 'react';
import ReactDOM from 'react-dom';
import ReactRouter, {Route, IndexRoute, Router} from 'react-router';

import Navbar from './navbar';
import Quote from './quote';
import QDB from './components/qdb';

const history = useBasename(createHistory)({baseName: '/qdb'});

class App extends React.Component {
    render() {
        return(
            <div>    
                <Navbar />
                <div className='container' id='qdb-content'>
                    <Quote
                        qdbid='1129'
                        quoteText='Hello World with React!'
                        smallText='Hello World subtext!'
                    />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
  <Router history={history} >
    <Route path='/qdb' component={QDB} />
  </Router>
  , document.getElementById('app'));
