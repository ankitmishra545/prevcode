import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';


let initialStore = {
  users:"",
  userDetails:{},
  messages: []
};

let reducer = (currentStore = initialStore, action) => {
  switch(action.type){
    case "login":
      return {...currentStore, userDetails: action.value};

    case "loading": 
      return {...currentStore, users: action.value};

    case "messages":
      return {...currentStore, messages: action.value}

    default: break;
  }
  return currentStore;
}

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
