import React from 'react';
import { ComponenteHeader } from '../components/ComponenteHeader';
import { Link } from 'react-router-dom';

export const InicioSesion = () => {
  return (
    <div>
        <ComponenteHeader/>

        <body>
        <h1 class='Titulo-Pag-Principal'>Iniciar Sesion</h1>
        <div className='menuPag'>
          <Link className='link' to={"/"}>Volver a Inicio</Link><br></br>
        </div>

        <div className='iniciosesion'>
          <h3>Utilice su correo institucional para iniciar sesion</h3>
          <h4 className='textoIS'>Correo: </h4>
          <input type='email' className='IS' placeholder='Escriba su correo'></input>
          <h4 className='textoIS'>Contraseña: </h4>
          <input type='password' className='IS' placeholder='Escriba su contraseña'></input>
          <input type='button' className='botonIS' value={"Entrar"}></input>
          <Link className='botonIS' to={'/UsuarioInicio'}>Usuario</Link>
          <Link className='botonIS' to={'/AdminInicio'}>Admin</Link>
          
        </div>

        
        </body>

    </div>
  )
}
