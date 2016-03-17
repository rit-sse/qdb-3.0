import {
  GET_QUOTES_SUCCESS,
  APPROVE_QUOTE_SUCCESS,
} from '../actions/quotes';

export default function quotes(state={ list: [], total: 0, perPage: 15 }, action) {
  switch (action.type) {
  case GET_QUOTES_SUCCESS:
    return Object.assign({}, state, {
      list: action.quotes.data,
      total: action.quotes.total,
      perPage: action.quotes.perPage,
    });
  case APPROVE_QUOTE_SUCCESS:
    return Object.assign({}, state, {
      list: state.list.slice(0, action.index).concat(state.list.slice(action.index + 1)),
    });
  default:
    return state;
  }
}
