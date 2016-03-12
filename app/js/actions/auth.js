'use strict';

import api from '../api';

export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    user,
  };
}

function signInFailed(error) {
  return {
    type: SIGN_IN_FAILURE,
    error,
  };
}

function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS,
  };
}

function signOutFailed(error) {
  return {
    type: SIGN_OUT_FAILURE,
    error,
  };
}

export function signIn(googleUser) {
  return dispatch => {
    const info = {
      token: googleUser.getAuthResponse().id_token,
      id: googleUser.getBasicProfile().getEmail().split('@')[0],
    };
    return Promise.all([info, api.Officers.all({ primary: true, active: new Date() }, true)])
      .then(data => {
        const officers = data[1];
        const oIndex = officers.map(o => o.userDce).indexOf(data[0].id);
        const user = { dce: data[0].id, primary: oIndex !== -1 };

        return Promise.all([
          api.Auth.getToken('google', data[0].id,  data[0].token),
          user,
        ]);
      })
      .then(p => dispatch(signInSuccess(p[1])))
      .catch(error => dispatch(signInFailed(error)));
  };
}


export function signOut() {
  return dispatch => {
    return Promise
      .all([api.Auth.signOut(), gapi.auth2.getAuthInstance().signOut()])
      .then(() => dispatch(signOutSuccess()))
      .catch(error => dispatch(signOutFailed(error)));
  };
}
