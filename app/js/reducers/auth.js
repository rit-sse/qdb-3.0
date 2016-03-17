import {
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS,
} from '../actions/auth';

export default function auth(state = { signedIn: false }, action) {
  switch (action.type) {
  case SIGN_IN_SUCCESS:
    return { signedIn: true, officer: action.user.officer  };
  case SIGN_OUT_SUCCESS:
    return { signedIn: false };
  default:
    return state;
  }
}
