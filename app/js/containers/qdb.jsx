import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../components/navbar';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

class QDB extends React.Component {
  render() {
    return (
      <div>
        <Navbar auth={this.props.auth}  dispatch={this.props.dispatch} />
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(QDB);
