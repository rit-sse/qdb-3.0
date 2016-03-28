import React, { Component } from 'react';
import { signIn } from '../actions/auth';

export default class LogIn extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    const auth2 = gapi.auth2.init({
      client_id: process.env.GOOGLE_CLIENT_ID, // eslint-disable-line camelcase
      cookie_policy: 'single_host_origin', // eslint-disable-line camelcase
    });
    auth2.attachClickHandler(this.refs.button, {}, googleUser => {
      this.props.dispatch(signIn(googleUser));
    });
  }

  render() {
    return (
      <a href='#' id='login' ref='button'>
        <i className='fa fa-google'></i> Sign In
      </a>
    );
  }
}
