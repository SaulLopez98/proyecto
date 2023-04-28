import React from 'react'
import { ComponenteHeader } from '../components/ComponenteHeader'
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div>
        <ComponenteHeader/>

        <body>
        <h1 class='Titulo-Pag-Principal'>Gestor de Salas</h1>
        <div className='menuPag'>
          <Link className='link' to={"/InicioSesion"}>Iniciar Sesion</Link><br></br>
        </div>

        <div class='texto'>
          <br></br>
          <p class='intro'>
            <b>Bienvenido al Gestor de Salas de la Universidad Xochcalco.</b><br></br><br></br>
            En este apartado se realizan los procesos de solicitudes de salas, en donde
            un docente o administrativo podra solicitar una sala llenando un formulario
            el cual sera revisado por el equipo de informatica para despues aceptar o 
            rechazar dicha solicitud.<br></br><br></br>En esta aplicacion:
          </p>
          <div className='infobox'>

            <div className='info'>
              <div className='infor'>
              <p class='infotext'>
                Deberas iniciar sesion con tu correo institucional
              </p>
              </div>
              <div className='imagenes'>
              <img className='imagen' src='login.png'></img>
              </div>
            </div>

            <div className='info'>
              <div className='infor'>
              <p class='infotext'>
                Llenaras el formulario de <b>Solicitud de Agenda</b> y
                podras ver tu historial de solicitudes.
              </p>
              </div>
              <div className='imagenes'>
              <img className='imagen' src='form.png'></img>
              </div>
            </div>

            <div className='info'>
              <div className='infor'>
              <p class='infotext'>
                Un administrador analizara tu solicitud de acuerdo
                a la disponibilidad del dia solicitado.
              </p>
              </div>
              <div className='imagenes'>
              <img className='imagen' src='admin.png'></img>
              </div>
            </div>

            <div className='info'>
              <div className='infor'>
              <p class='infotext'>
                Tu solicitud sera <b class='aceptada'>Aceptada</b> o <b class='rechazada'>Rechazada</b>
              </p>
              </div>
              <div class='imagenes'>
              <img className='imagen' src='check.png'></img>
              <img className='imagen' src='x.png'></img>
              </div>
            </div>
          </div>
        </div>
        </body>

    </div>

    
  )
}
