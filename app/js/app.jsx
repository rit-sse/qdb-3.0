import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navbar';
import Quote from './quote';

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
        (<App />),
        document.getElementById('app')
);
