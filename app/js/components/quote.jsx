import React, { Component } from 'react';

export default class Quote extends Component {
  render() {
    return  (
      <div className='well well-lg'>
        <a href='#'>{this.props.qdbid}</a>
        <blockquote className='qdb-quote-text'>
          {this.props.quote.body.split(/\r\n|\r|\n/g).map(line => {
            return (
              <span>
                {line}
                <br />
              </span>
            );
          })}
        </blockquote>
        <small id='qdb-small-text'>
          {this.props.quote.description}
        </small>
        <hr />
        {this.props.quote.tags.map(tag => {
          return <button type='button' className='qdb-tag-button btn btn-primary btn-sm' id={tag.name} key={tag.name}>{tag.name}</button>;
        })}
      </div>
    );
  }
}
