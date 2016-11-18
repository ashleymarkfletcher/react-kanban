import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import * as reducers from './reducers';

import Kanban from './components/kanban'

const reducer = combineReducers(reducers);
const store = createStore(reducer);

import { addFriend, deleteFriend, starFriend } from './actions/kanbanActions';

// store.dispatch({ type: 'INCREMENT' })

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
            <Kanban/>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
