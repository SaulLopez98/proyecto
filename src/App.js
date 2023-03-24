import './App.css';
import { ComponenteHeader } from './components/ComponenteHeader';
import React, {useState} from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css'

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <ComponenteHeader/>
      </header>
      <body>
        <h1 class='Titulo-Pag-Principal'>Apartado de gestion de aulas</h1>
        <Datetime
            inputProps={{placeholder: "DD/MM/YY"}}
            dateFormat="DD/MM/YYYY"
            input={false}/>aaa
      </body>
    </div>
  );
}


export default App;
