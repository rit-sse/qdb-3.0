import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { MultiSelect } from 'react-selectize';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {
  constructor() {
    super();

    this.valuesFromPaste = this.valuesFromPaste.bind(this);
    this.createFromSearch = this.createFromSearch.bind(this);
    this.renderNoResultsFound = this.renderNoResultsFound.bind(this);
    this.submit = this.submit.bind(this);
  }

  valuesFromPaste(options, values, pastedText) {
    return pastedText
    .split(/,| /)
    .filter(text => values.find(value => value.label === text ))
    .map(text => ({ label: text, value: text }));
  }

  createFromSearch(options, values, search) {
    const labels = values.map(value => value.label);
    const searchTrim = search.trim();
    if (searchTrim.length === 0 || labels.indexOf(searchTrim) !== -1) {
      return null;
    }
    return { label: searchTrim, value: searchTrim };
  }

  renderNoResultsFound(values, search) {
    let str = '';
    const searchTrim = search.trim();
    if (searchTrim.length === 0) {
      str = 'Type a few characters to create a tag';
    } else if (values.map(item => item.label ).indexOf(searchTrim) !== -1) {
      str = 'Tag already exists';
    }
    return <div className = 'no-results-found'>{str}</div>;
  }

  submit(quote) {
    quote.tags = (quote.tags || []).map(tag => tag.value);
    this.props.dispatch(addQuote(quote));
  }

  render() {
    const { fields: { body, description, tags }, handleSubmit } = this.props;
    return (
      <form role='form' onSubmit={handleSubmit(this.submit)}>
        <div className='form-group'>
          <label htmlFor='new-quote'>Enter your quote:</label>
          <textarea className='form-control' rows='3' {...body} />
        </div>
        <div className='form-group'>
          <label htmlFor='more-info'>Enter additional information about the quote, if any:</label>
          <textarea className='form-control' rows='3' {...description}/>
        </div>
        <div className='form-group'>
          <label htmlFor='tags-input'>Enter any tags: </label>
          <MultiSelect
            className='width-100'
            options={this.props.tags.map(tag => ({ label: tag.name, value: tag.name }))}
            values={tags.value || []}
            delimiters={[188, 32]}
            valuesFromPaste={this.valuesFromPaste}
            restoreOnBackspace={item => item.label}
            onValuesChange={selected => tags.onChange(selected)}
            createFromSearch={this.createFromSearch}
            renderNoResultsFound={this.renderNoResultsFound}
            theme='bootstrap3'
            placeholder='Enter some tags...'
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-default'>Submit</button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'quote',
  fields: ['body', 'description', 'tags'],
})(QuoteForm);
