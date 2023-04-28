import React from 'react'
import { Link } from 'react-router-dom'
import { ComponenteHeader } from '../components/ComponenteHeader'

export const AdminSolicitudes = () => {
  return (
    <body>
    <ComponenteHeader></ComponenteHeader>
    <h1 className='Titulo-Pag-Principal'>Gestor de Solicitudes</h1>
    <div className='ListaBotones'>
        <Link className='link' to={"/AdminInicio"}>Salir a Inicio</Link><br></br>   
    </div>

    <div className='ListaHistorial'>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Sala</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Estado</th>
          <th>Aceptar/Rechazar</th>
        </tr>
        <tr>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>
            <input type='button' value={"Aceptar"}></input>
            <input type='button' value={"Rechazar"}></input>
          </th>
        </tr>
        <tr>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>
          <input type='button' value={"Aceptar"}></input>
          <input type='button' value={"Rechazar"}></input>
          </th>
        </tr>
        <tr>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>
          <input type='button' value={"Aceptar"}></input>
          <input type='button' value={"Rechazar"}></input>
          </th>
        </tr>
      </table>
    </div>
</body>
  )
}
