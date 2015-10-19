import React, {Component} from 'react';

export default class Quote extends Component {
	render() {
        var tags = this.props.tags
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
            {tags.map(function(tag){
                return <button type='button' className='qdb-tag-button btn btn-primary btn-sm' id='{tag}'>{tag}</button> ;                                  
            })}
        </div>
        );
	}
}
