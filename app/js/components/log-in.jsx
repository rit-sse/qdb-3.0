import React, { Component } from 'react';
import { signIn } from '../actions/auth';
import API from '../api';

export default class LogIn extends Component {
  constructor() {
    super();
    this.state = { disable_login: true };
  }

  componentDidMount() {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
<<<<<<< HEAD
    API
      .Auth
      .clientId()
      .then( ({ token }) => {
         const auth2 = gapi.auth2.init({
           client_id: process.env.GOOGLE_CLIENT_ID, // eslint-disable-line camelcase
           cookie_policy: 'single_host_origin', // eslint-disable-line camelcase
         });
         auth2.attachClickHandler(this.refs.button.getDOMNode(), {}, googleUser => {
           this.props.dispatch(signIn(googleUser));
         });
      }) 
      .catch( err => console.log(err) );
=======
    const auth2 = gapi.auth2.init({
      client_id: process.env.GOOGLE_CLIENT_ID, // eslint-disable-line camelcase
      cookie_policy: 'single_host_origin', // eslint-disable-line camelcase
    });
    auth2.attachClickHandler(this.refs.button, {}, googleUser => {
      this.props.dispatch(signIn(googleUser));
    });
>>>>>>> 5d1ffc0ec5cec44e89e1123ed7e44f25427403e4
  }

  render() {
    return (
<<<<<<< HEAD
      <button disable={this.state.disable_login} id='login' className='btn btn-primary navbar-btn ' ref='button'>
=======
      <a href='#' id='login' ref='button'>
>>>>>>> 5d1ffc0ec5cec44e89e1123ed7e44f25427403e4
        <i className='fa fa-google'></i> Sign In
      </a>
    );
  }
}
