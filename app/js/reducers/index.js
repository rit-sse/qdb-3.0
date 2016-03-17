import { combineReducers } from 'redux';
import auth from './auth';
import status from './status';
import tags from './tags';
import quotes from './quotes';

export default combineReducers({
  auth,
  status,
  tags,
  quotes,
});
