import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILED,
} from '../actions/auth';

import { GET_TAGS_FAILED } from '../actions/tags';
import {
  GET_QUOTES_FAILED,
  APPROVE_QUOTE_FAILED,
  ADD_QUOTE_SUCCESS,
  ADD_QUOTE_FAILED,
} from '../actions/quotes';

import { CLEAR_STATUS } from '../actions/status';

export default function status(state = { err: null, notice: null }, action) {
  switch (action.type) {
  case SIGN_IN_SUCCESS:
    return Object.assign({}, state, {
      err: null,
      notice: { message: 'Signed In Successfully!' },
    });
  case SIGN_OUT_SUCCESS:
    return Object.assign({}, state, {
      err: null,
      notice: { message: 'Signed Out Successfully!' },
    });
  case ADD_QUOTE_SUCCESS:
    return Object.assign({}, state, {
      err: null,
      notice: { message: 'Quote Createad! The quote will be visible pending moderation' },
    });
  case SIGN_OUT_FAILED:
  case SIGN_IN_FAILED:
  case GET_TAGS_FAILED:
  case GET_QUOTES_FAILED:
  case APPROVE_QUOTE_FAILED:
  case ADD_QUOTE_FAILED:
    return Object.assign({}, state, {
      err: action.error,
      notice: null,
    });
  case CLEAR_STATUS:
    return { err: null, notice: null };
  default:
    return state;
  }
}
