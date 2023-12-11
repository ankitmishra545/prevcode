import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Clients from './components/pages/Clients';
import Header from './components/Header';
import Contact from './components/pages/Contact';
import Employees from './components/pages/Employees';
import Follow from './components/pages/Follow';
import Photos from './components/pages/Photos';
import Products from './components/pages/Products';
import Reviews from './components/pages/Reviews';
import Services from './components/pages/Services';
import Cart from './components/pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute'
import React, { useState } from 'react';
// import ErrorBoundry from './components/ErrorBoundry';
import SignUp from './components/SignUp';
import "primereact/resources/primereact.min.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import '@progress/kendo-theme-default/dist/all.css';

function App() {

  const [fData, setFData] = useState();
  const getValueHeader = (data) => {
          setFData(data);
        }

  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/signUp' element={<SignUp/>}></Route>     
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={<ProtectedRoute><Header value1={getValueHeader}/></ProtectedRoute>}>
          <Route index element={<Home/>}/>
          <Route path='clients' element={<Clients/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='employees' element={<Employees/>}/>
          <Route path='follow' element={<Follow/>}/>
          <Route path='vendors' element={<Cart/>}/>
          <Route path='photos' element={<Photos/>}/>
          <Route path='products' element={<Products/>}/>
          <Route path='reviews' element={<Reviews/>}/>
          <Route path='services' element={<Services pass={fData}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
