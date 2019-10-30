import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jaime aprendiendo React
        </p>
        <p>
          Toqueteando React, Node y CMD
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Truquillos React
        </a>
      </header>
    </div>
  );
}

export default App;
