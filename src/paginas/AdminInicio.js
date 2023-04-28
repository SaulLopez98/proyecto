import React from 'react'
import {Link} from 'react-router-dom';
import { ComponenteHeader } from '../components/ComponenteHeader'

export const AdminInicio = () => {
  return (
    <body>
        <ComponenteHeader></ComponenteHeader>
        <h1 className='Titulo-Pag-Principal'>Bienvenido al Apartado de Administracion</h1>
        <div className='ListaBotones'>
            <Link className='link' to={"/AdminSolicitudes"}>Gestionar Solicitudes</Link><br></br>
            <Link className='link' to={"/AdminHistorial"}>Historial de Solicitudes</Link><br></br>
            <Link className='link' to={"/"}>Cerrar Sesion</Link><br></br>
        </div>

    </body>
  )
}
