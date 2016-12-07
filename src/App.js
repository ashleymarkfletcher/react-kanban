import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { firebaseApp } from './firebase'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import kanbanApp from './reducers';

import Kanban from './components/kanban'

const store = createStore(kanbanApp);

class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Kanban/>
        </MuiThemeProvider>
      </Provider>
    )
  }

}

export default App;
