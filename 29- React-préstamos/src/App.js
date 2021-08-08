import React, {Fragment, useState} from 'react';
import './App.css';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';

function App() {

  //Definir un state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState("");

  return (
    <Fragment>
      < Header
         titulo="Cotizador de prestamos"
      />

      <div className="container">
        <Formulario
          cantidad ={cantidad}
          guardarCantidad = {guardarCantidad}
          plazo = {plazo}
          guardarPlazo = {guardarPlazo}
        />
      </div>

    </Fragment>
  );
}

export default App; 
