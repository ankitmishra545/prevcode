import logo from './logo.svg';
import './App.css';
import ComponentOne from './component/ComponentOne';
import ComponentTwo from './component/ComponentTwo';
import ComponentThree from './component/ComponentThree';
import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <ComponentOne/> 
      <ComponentTwo/>
      <ComponentThree/>
    </ErrorBoundary>
  );
}

export default App;
