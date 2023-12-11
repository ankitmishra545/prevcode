import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Promis from './component/Promis';
import AsyncAwait from './component/AsyncAwait';
import FromEvent from './component/FromEvent';
import IntervalTimer from './component/IntervalTimer';
import FromOf from './component/FromOf';
import ToArray from './component/ToArray';
import CustomOservable from './component/CustomOservable';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ComponentRandom from './component/ComponentRandom';
import MapComponent from './component/MapComponent';
import FilterOperator from './component/FilterOperator';
import TapOperator from './component/TapOperator';
import TakeOperator from './component/TakeOperator';
import RetryOperator from './component/RetryOperator';



function App() {
  return (
    <div>
      {/* <Promis></Promis>
      <AsyncAwait></AsyncAwait> */}
      {/* <FromEvent/> */}
      {/* <IntervalTimer/> */}
      {/* <FromOf/> */}
      {/* <ToArray/> */}
      {/* <CustomOservable/> */}
      {/* <BrowserRouter>
      <Link to="/">Link</Link>
      <Link to="/other">other</Link>
        <Routes>
          <Route path='/' element={<CustomOservable/>}/>
          <Route path='/other' element={<ComponentRandom/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <MapComponent/> */}
      {/* <FilterOperator/> */}
      {/* <TapOperator/> */}
      {/* <TakeOperator/> */}
      <RetryOperator/>
    </div>
  );
}

export default App;
