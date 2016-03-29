import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
  SIGN_IN_BY_TOKEN,
  SIGN_OUT_BY_TOKEN,
} from '../actions/auth';

export default function auth(state = { signedIn: false }, action) {
  switch (action.type) {
  case SIGN_IN_SUCCESS:
  case SIGN_IN_BY_TOKEN:
    return { signedIn: true, officer: action.user.officer  };
  case SIGN_OUT_SUCCESS:
  case SIGN_OUT_BY_TOKEN:
    return { signedIn: false };
  default:
    return state;
  }
}
