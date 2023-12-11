import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import { Provider } from 'react-redux';

const initialStore = {
  products: [],
  employees: [],
  carts: [],
  isLogged: "" 
};

const reducer = (currentStore = initialStore, action) => {
  switch(action.type){
    case "products": 
      return {...currentStore, products: action.value};

    case "employees":
      return {...currentStore, employees: action.value};

    case "carts":
      return {...currentStore, carts: action.value};

    case "validate":
      return {...currentStore, isLogged: action.value};

    default: 
      return currentStore;
  }  
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
