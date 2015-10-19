import React, {Component} from 'react';

export default class Quote extends Component {
	render() {
        return(
		<div className='well well-lg'>
            <a href='#'>{this.props.qdbid}</a>
            <blockquote className='qdb-quote-text'>
                {this.props.quoteText}
            </blockquote>
            <small id='qdb-small-text'>
                {this.props.smallText}
            </small>
            <hr />

        </div>
        );
	}
}
