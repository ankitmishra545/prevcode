import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import ForgotPage from './components/ForgotPage';
import Home from './components/Home';
import Data from './components/Data';
import Message from './components/Message';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Login></Login>}></Route>
        <Route path='/forgotPWD' element = {<ForgotPage></ForgotPage>}></Route>
        <Route path='/home' element = {<Home></Home>}></Route>
        <Route path='/data' element = {<Data></Data>}></Route>
        <Route path='/message' element = {<Message></Message>}></Route>         
      </Routes>
    </BrowserRouter>
  );
}

export default App;
