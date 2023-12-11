import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Clients from './components/pages/Clients';
import Contact from './components/pages/Contact';
import Employees from './components/pages/Employees';
import Follow from './components/pages/Follow';
import Photos from './components/pages/Photos';
import Products from './components/pages/Products';
import Reviews from './components/pages/Reviews';
import Services from './components/pages/Services';
import Vendors from './components/pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/clients' element={<Clients></Clients>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/employees' element={<Employees></Employees>}></Route>
        <Route path='/follow' element={<Follow></Follow>}></Route>
        <Route path='/vendors' element={<Vendors></Vendors>}></Route>
        <Route path='/photos' element={<Photos></Photos>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
