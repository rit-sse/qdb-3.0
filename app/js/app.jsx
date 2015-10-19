import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navbar';
import Quote from './quote';

class App extends React.Component {
    render() {
        return(
            <div>    
                <Navbar />
                <div className="container" id="qdb-content" qdbid="1129">
                    <Quote />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
        (<App />),
        document.getElementById('app')
);
