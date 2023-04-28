import React from 'react'
import { Link } from 'react-router-dom'
import { ComponenteHeader } from '../components/ComponenteHeader'

export const AdminHistorial = () => {
  return (
    <body>
    <ComponenteHeader></ComponenteHeader>
    <h1 className='Titulo-Pag-Principal'>Historial de Administradores</h1>
    <div className='menuPag'>
        <Link className='link' to={"/AdminInicio"}>Salir a Inicio</Link><br></br>
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
