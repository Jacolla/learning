import React from 'react';
import logo from './logo.svg';
import './App.css';

function HolaMundo(nombre, edad){
  let present = (
    <div>
      <h3>Hola, soy {nombre}</h3>
      <h3>Tengo {edad} años</h3>
      <h3>Y estoy aprendiendo ReactJS</h3>
      </div>
      );
      
  return present
}

function App() {

let nombre = "Jaime"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learning ReactJS.
        </p>
        {HolaMundo(nombre, 25)}
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
