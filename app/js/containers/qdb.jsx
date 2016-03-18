import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/navbar';
import { clearStatus }  from '../actions/status';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    status: state.status,
  };
}

class QDB extends Component {

  constructor() {
    super();

    this.clearStatus = this.clearStatus.bind(this);
    this.renderError = this.renderError.bind(this);
    this.renderNotice = this.renderNotice.bind(this);
  }

  clearStatus() {
    this.props.dispatch(clearStatus());
  }

  renderError() {
    if (this.props.status.err) {
      return (
        <div className='alert alert-danger alert-dismissable' role='alert'>
          <button type='button' className='close' aria-label='Close' onClick={this.clearStatus}>
            <span aria-hidden='true' className='fa fa-times' />
          </button>
          {this.props.status.err.message}
        </div>
      );
    }
    return null;
  }

  renderNotice() {
    if (this.props.status.notice) {
      return (
        <div className='alert alert-info alert-dismissable' role='alert'>
          <button type='button' className='close' aria-label='Close' onClick={this.clearStatus}>
            <span aria-hidden='true' className='fa fa-times' />
          </button>
          {this.props.status.notice.message}
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <Navbar auth={this.props.auth}  dispatch={this.props.dispatch} />
        <div className='container'>
          {this.renderNotice()}
          {this.renderError()}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(QDB);
