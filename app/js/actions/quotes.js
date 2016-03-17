import api from '../api';

export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILED = 'GET_QUOTES_FAILED';
export const APPROVE_QUOTE_SUCCESS = 'APPROVE_QUOTE_SUCCESS';
export const APPROVE_QUOTE_FAILED = 'APPROVE_QUOTE_FAILED';
export const ADD_QUOTE_SUCCESS = 'ADD_QUOTE_SUCCESS';
export const ADD_QUOTE_FAILED = 'ADD_QUOTE_FAILED';

function getQuotesSuccess(quotes) {
  return {
    type: GET_QUOTES_SUCCESS,
    quotes,
  };
}

function getQuotesFailure(error) {
  return {
    type: GET_QUOTES_FAILED,
    error,
  };
}

function approveSuccess(index) {
  return {
    type: APPROVE_QUOTE_SUCCESS,
    index,
  };
}

function approveFailure(error) {
  return {
    type: APPROVE_QUOTE_FAILED,
    error,
  };
}

function addSuccess() {
  return {
    type: ADD_QUOTE_SUCCESS,
  };
}

function addFailure(error) {
  return {
    type: ADD_QUOTE_FAILED,
    error,
  };
}

export function getQuotes(page, tag, search, approved=true) {
  return dispatch => {
    return api.Quotes.all({ page, tag, approved, search })
      .then(data => dispatch(getQuotesSuccess(data)))
      .catch(error => dispatch(getQuotesFailure(error)));
  };
}

export function approveQuote(quote, index, approved) {
  return dispatch => {
    return api.Quotes.update(quote.id, { approved })
      .then(() => dispatch(approveSuccess(index)))
      .catch(error => dispatch(approveFailure(error)));
  };
}

export function addQuote(quote) {
  return dispatch => {
    return api.Quotes.create(quote)
      .then(() => dispatch(addSuccess()))
      .catch(error => dispatch(addFailure(error)));
  };
}
