import '../style/toast.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToastContainer from '../container/ToastContainer';

function mapStateToProps(state) {
  // console.log(state);
  return {
    isFetching: state.getIn(['invokeService', 'isFetching']),
    serviceType: state.getIn(['invokeService', 'serviceType'])
  };
}

class App extends Component {
  render() {
    return (
      <div className="story-app">
        <ToastContainer />

        {this.props.children}
      </div>
    );
  }
}

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
