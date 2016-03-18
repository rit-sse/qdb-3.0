import React, { Component } from 'react';

import Tag from './tag';

export default class Quote extends Component {
  render() {
    return  (
      <div className='well well-lg'>
        <a href='#'>{this.props.quote.id}</a>
        <blockquote className='qdb-quote-text'>
          {this.props.quote.body.split(/\r\n|\r|\n/g).map((line, i) => {
            return (
              <span key={i}>
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
        {this.props.quote.tags.map(tag => <Tag tag={tag} key={tag.name} />)}
      </div>
    );
  }
}
