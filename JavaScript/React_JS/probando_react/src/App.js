import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import MiComponentes from './componentes/MiComponentes.js';

/* Aqui comentarios normales de JS */

function HolaMundillo(nombre,edad){
  let presentacion= (
    <div>
      <h2>Hola, soy {nombre}</h2>
      <h3>Tengo {edad} años</h3>
    </div>
  );
  return presentacion;
}



function App() {
  let nombre="Jaime";
  return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aprendiendo React
        </p>
        {HolaMundillo(nombre,25)}

        <section className="MiComponentes">
          <MiComponentes />
        </section>

      </header>
        

{/* <--  Para hacer comentarios en React  --> */}

    </div>
  );
}

export default App;
