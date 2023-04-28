import './App.css';
import { ComponenteHeader } from '../components/ComponenteHeader';
import React, {useState} from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import { ComponenteMobiliario } from '../components/ComponenteMobiliario';
import { ComponenteSala } from '../components/ComponenteSala';
import { ComponenteNombre } from '../components/ComponenteNombre';
import { ComponenteDepartamento } from '../components/ComponenteDepartamento';
import { ComponenteEvento } from '../components/ComponenteEvento';
import { ComponenteMontaje } from '../components/ComponenteMontaje';
import { ComponenteEquipoInf } from '../components/ComponenteEquipoInf';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ComponenteHeader/>
      </header>
      <body>
        <div className='ListaBotones'>
          <Link className='link' to={"/UsuarioInicio"}>Volver a inicio</Link>
        </div>

        <h1 class='Titulo-Pag-Principal'>Formulario de Solicitud de Salas</h1>
        <form action='' id="form">
        <div className='Calendario'>
          <div className='listaHerramientas'>
            <dl>
            <div className="Division">
              <dt><b>Nombre del solicitante</b></dt>
              <ComponenteNombre/>
            </div>

            <div className="Division">
              <dt><b>Carrera o departamento</b></dt>
              <ComponenteDepartamento/>
            </div>

            <div className="Division">
              <dt><b>Nombre del evento</b></dt>
              <ComponenteEvento/>
            </div>

            <div className="Division">
              <dt><b>Sala</b></dt>
              <ComponenteSala/>
            </div>

            <div className='Division'>
              <dt><b>Mobiliario</b></dt>
              <ComponenteMobiliario/>
            </div>

            <div className='Division'>
              <dt><b>Tipo de Montaje</b></dt>
              <ComponenteMontaje/>
            </div>

            <div className='Division'>
              <dt><b>Equipo Informatica</b></dt>
              <ComponenteEquipoInf/>
            </div>

            </dl>
          </div>

        <Datetime className='calen'
            inputProps={{placeholder: "DD/MM/YY"}}
            dateFormat="DD/MM/YYYY"
            input={false}/>
        </div>
        </form>
      </body>
    </div>
    
  );
}


export default App;
