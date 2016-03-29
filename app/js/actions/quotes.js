import api from '../api';
import { browserHistory } from 'react-router';

export const GET_QUOTES_SUCCESS = 'GET_QUOTES_SUCCESS';
export const GET_QUOTES_FAILED = 'GET_QUOTES_FAILED';
export const APPROVE_QUOTE_SUCCESS = 'APPROVE_QUOTE_SUCCESS';
export const APPROVE_QUOTE_FAILED = 'APPROVE_QUOTE_FAILED';
export const ADD_QUOTE_SUCCESS = 'ADD_QUOTE_SUCCESS';
export const ADD_QUOTE_FAILED = 'ADD_QUOTE_FAILED';
export const GET_QUOTE_SUCCESS = 'GET_QUOTE_SUCCESS';
export const GET_QUOTE_FAILED = 'GET_QUOTE_FAILED';
export const UPDATE_QUOTE_SUCCESS = 'UPDATE_QUOTE_SUCCESS';
export const UPDATE_QUOTE_FAILED = 'UPDATE_QUOTE_FAILED';

function getQuotesSuccess(quotes) {
  return {
    type: GET_QUOTES_SUCCESS,
    quotes,
  };
}

function getQuotesFailed(error) {
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

function approveFailed(error) {
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

function addFailed(error) {
  return {
    type: ADD_QUOTE_FAILED,
    error,
  };
}

function getQuoteSuccess(quote) {
  return {
    type: GET_QUOTE_SUCCESS,
    quote,
  };
}

function getQuoteFailed(error) {
  return {
    type: GET_QUOTE_FAILED,
    error,
  };
}

function updateSuccess() {
  return {
    type: UPDATE_QUOTE_SUCCESS,
  };
}

function updateFailed(error) {
  return {
    type: UPDATE_QUOTE_FAILED,
    error,
  };
}

export function getQuotes(page, tag, search, approved=true) {
  return dispatch => {
    return api.Quotes.all({ page, tag, approved, search })
      .then(data => dispatch(getQuotesSuccess(data)))
      .catch(error => dispatch(getQuotesFailed(error)));
  };
}

export function getQuote(id) {
  return dispatch => {
    return api.Quotes.one(id)
      .then(data => dispatch(getQuoteSuccess(data)))
      .catch(error => dispatch(getQuoteFailed(error)));
  };
}

export function approveQuote(quote, index, approved) {
  return dispatch => {
    return api.Quotes.update(quote.id, { approved })
      .then(() => dispatch(approveSuccess(index)))
      .catch(error => dispatch(approveFailed(error)));
  };
}

export function addQuote(quote) {
  return dispatch => {
    return api.Quotes.create(quote)
      .then(() => dispatch(addSuccess()))
      .then(() => browserHistory.push('/qdb/quotes'))
      .catch(error => dispatch(addFailed(error)));
  };
}

export function updateQuote(quote) {
  return dispatch => {
    return api.Quotes.update(quote.id, quote)
      .then(() => dispatch(updateSuccess()))
      .then(() => browserHistory.push('/qdb/quotes'))
      .catch(error => dispatch(updateFailed(error)));
  };
}
