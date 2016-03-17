import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
} from '../actions/auth';

import { GET_TAGS_FAILURE } from '../actions/tags';
import {
  GET_QUOTES_FAILURE,
  APPROVE_QUOTE_FAILURE,
  ADD_QUOTE_SUCCESS,
  ADD_QUOTE_FAILURE,
} from '../actions/quotes';

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
  case SIGN_OUT_FAILURE:
  case SIGN_IN_FAILURE:
  case GET_TAGS_FAILURE:
  case GET_QUOTES_FAILURE:
  case APPROVE_QUOTE_FAILURE:
  case ADD_QUOTE_FAILURE:
    return Object.assign({}, state, {
      err: action.error,
      notice: null,
    });
  default:
    return state;
  }
}
