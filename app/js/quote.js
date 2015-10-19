import React, {Component} from 'react';

export default class Quote extends Component {
	render() {
        return(
		<div className="well well-lg">
            <a href="#">{this.props.qdbid}</a>
        </div>
        );
	}
}
