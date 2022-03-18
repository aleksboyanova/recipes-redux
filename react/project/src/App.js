import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import AllReducers from './app/reducers/AllReducers';
import Home from './app/views/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
const store = createStore(AllReducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return ( <Provider store={store}>
        <Home />
    </Provider>)
  }
}

export default App;
