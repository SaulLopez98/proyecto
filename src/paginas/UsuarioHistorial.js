import React from 'react'
import { ComponenteHeader } from '../components/ComponenteHeader'
import { Link } from 'react-router-dom'

export const UsuarioHistorial = () => {
  return (
    <body>
    <ComponenteHeader></ComponenteHeader>
    <h1 className='Titulo-Pag-Principal'>Historial de Usuario</h1>
    <div className='menuPag'>
        <Link className='link' to={"/SolicitudAgenda"}>Solicitar Sala</Link><br></br>
        <Link className='link' to={"/UsuarioInicio"}>Salir a Inicio</Link><br></br>
    </div>
    <div className='ListaHistorial'>
      <table>
        <tr>
          <th>Sala</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Estado</th>
        </tr>
        <tr>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
        </tr>
        <tr>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
        </tr>
        <tr>
          <th>.</th>
          <th>.</th>
          <th>.</th>
          <th>.</th>
        </tr>
      </table>
    </div>

</body>
  )
}
