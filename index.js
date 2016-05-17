import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import { render } from 'react-dom';
import React from 'react';

const App = props => <div>{props.stuff}</div>;

function mapStateToProps(state, props) {
  return {
    stuff: state.stuff
  };
}
const ConnectedApp = connect(mapStateToProps, App);

function stuff(state, action) {
  return {
    stuff: 'thing'
  };
}
const store = createStore(stuff);

render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);
