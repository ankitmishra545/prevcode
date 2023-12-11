import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import Home from './component/Home';
import Services from './component/Services';
import Products from './component/Products';
import Contact from './component/Contact';
import Employees from './component/Employees';
import Clients from './component/Clients';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<ProtectedRoute><Header /></ProtectedRoute>}>
            <Route index element={<Home />}></Route>
            <Route path='products' element={<Products />}></Route>
            <Route path='Contact' element={<Contact />}></Route>
            <Route path='Employees' element={<Employees />}></Route>
            <Route path='services' element={<Services />}></Route>
            <Route path='clients' element={<Clients />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
