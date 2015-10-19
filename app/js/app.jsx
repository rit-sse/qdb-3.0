import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from './navbar';

class App extends React.Component {
    render() {
        return(<Navbar />);
    }
}

ReactDOM.render(
        (<App />),
        document.getElementById('app')
);
