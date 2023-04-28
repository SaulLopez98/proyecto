import React from 'react'
import { ComponenteHeader } from '../components/ComponenteHeader'
import { Link } from 'react-router-dom'

export const UsuarioInicio = () => {
  return (
    <body>
        <ComponenteHeader></ComponenteHeader>
        <h1 className='Titulo-Pag-Principal'>Bienvenido al Apartado de Usuario</h1>
        <div className='ListaBotones'>
            <Link className='link' to={"/SolicitudAgenda"}>Solicitar Sala</Link><br></br>
            <Link className='link' to={"/UsuarioHistorial"}>Historial de Solicitudes</Link><br></br>
            <Link className='link' to={"/"}>Cerrar Sesion</Link><br></br>
            
        </div>

    </body>
  )
}
