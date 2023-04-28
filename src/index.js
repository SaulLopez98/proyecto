import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './paginas/App';
import { Inicio } from './paginas/Inicio';
import { InicioSesion } from './paginas/InicioSesion';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsuarioInicio } from './paginas/UsuarioInicio';
import { UsuarioHistorial} from './paginas/UsuarioHistorial';
import { AdminHistorial } from './paginas/AdminHistorial';
import { AdminInicio } from './paginas/AdminInicio';
import { AdminSolicitudes } from './paginas/AdminSolicitudes';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicio/>,
    },
    {
        path: "/InicioSesion",
        element: <InicioSesion/>
    },
    {
        path: "/SolicitudAgenda",
        element: <App/>
    },
    {
        path: "/AdminHistorial",
        element: <AdminHistorial/>
    },
    {
        path: "/AdminInicio",
        element: <AdminInicio/>
    },
    {
        path: "/AdminSolicitudes",
        element: <AdminSolicitudes/>
    },
    {
        path: "/UsuarioInicio",
        element: <UsuarioInicio/>
    },
    {
        path: "/UsuarioHistorial",
        element: <UsuarioHistorial/>
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);

