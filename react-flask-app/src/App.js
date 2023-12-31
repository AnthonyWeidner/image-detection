/**
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/





// App.js

import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';

function App() {
  return (
      <>
        <div className="App">
          <header className="App-header">
            <h1>Image Classifier CIFAR-100</h1>
            <ImageUpload />
          </header>
        </div>
      </>

  );
}

export default App;




/**
// App.js

import React from 'react';
import './App.css';
import ImageUpload from './ImageUpload';
import CIFAR10Upload from './CIFAR10Upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Classifier</h1>

        <h2>CIFAR-100</h2>
        <ImageUpload />

        <hr />

        <h2>CIFAR-10</h2>
        <CIFAR10Upload />
      </header>
    </div>
  );
}

export default App;
*/
