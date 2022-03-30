import React from 'react';
import './admin-navbar.css';
import CarritoIcono from '../../imagenes/iconos/carrito.png';
import {Link} from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <div className='admin--navbar-seccion'>
            <Link to="/" className='link--titulo-logo'>
                <h1 className='titulo-logo'>MAX LIBRERIA</h1>
            </Link>
            <div className='contenedor-usuario'>
                <p>Bienvenido, Usuario1</p>
                
            </div>
            
            
        </div>
    )
}

export default AdminNavbar;
