import React from 'react';
import ReactDOM from 'react-dom';


// this way doing using JSX but we are involving in extra process of compiling into plain javascript using babble compiler other side it having some advantage also
/*{const element = <h1>Welcome to react programming...</h1>

ReactDOM.render(element,document.getElementById("root"));

const newElement = <h1>Understanding the creating elements in React...</h1>

// this render will overwrite in the root, preference given to the latest, so if we want to print both we can do by creating new div in index.html and render in that div is the one way and other
ReactDOM.render(newElement, document.getElementById("root"));


// other approach
const element = (
  <div>
    <h1>Welcome to react programming...</h1>
    <h2>Understanding the creating elements in React...</h2>
  </div>
)

ReactDOM.render(element, document.getElementById("root"));}*/

// using react without JSX is convenient when we don't want to setup compile in build environment
