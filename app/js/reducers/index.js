import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import status from './status';
import tags from './tags';
import quotes from './quotes';

export default combineReducers({
  auth,
  status,
  tags,
  quotes,
  form,
});
