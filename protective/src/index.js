import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// const initialStore = {
//   products: [],
//   employees: [],
//   isLogged: false,
// };

// const reducer = (currentStore = initialStore, action) => {
//   switch(action.type){
//     case "products": 
//       return {...currentStore, products: action.value};

//     case "employees":
//       return {...currentStore, employees: action.value};

//     case "validate":
//       return {...currentStore, isLogged: action.value};

//     default: 
//       return currentStore;
//   }
// }

const loggedInInitialStore = {
  isLogged: false,
}

const productsInitialStore = {
  products: [],
}

const employeesInitialStore = {
  employees: [],
  counts: 0
}

const productsReducer = (currentStore = productsInitialStore, action) => {
  switch(action.type){
    case "products":     
      return {...currentStore, products: action.value};
    default: 
      return currentStore;
  }
}

const employeesReducer = (currentStore = employeesInitialStore, action) => {
  switch(action.type){
    case "employees":
      return {...currentStore, employees: action.value, counts: currentStore.counts + 1};
    default: 
      return currentStore;
  }
}

const loggedInReducer = (currentStore = loggedInInitialStore, action) => {
  switch(action.type){
    case "validate":
      return {...currentStore, isLogged: action.value};

    default: 
      return currentStore;
  }
}


const rootReducer = combineReducers({products: productsReducer, employees: employeesReducer, loggedIn: loggedInReducer})

const store = createStore(rootReducer, applyMiddleware(thunk));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

