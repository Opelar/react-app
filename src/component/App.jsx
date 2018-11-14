import '../style/toast.css';
import React from 'react';
import { connect } from 'react-redux';
import ToastContainer from '../container/ToastContainer';

function mapStateToProps(state) {
  return {
    isFetching: state.getIn(['invokeService', 'isFetching']),
    serviceType: state.getIn(['invokeService', 'serviceType'])
  };
}

const App = props => (
  <div className="story-app">
    <ToastContainer />
    {props.children}
  </div>
);

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
