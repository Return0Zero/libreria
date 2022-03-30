import React from 'react';
import './navbar.css';
import Usuario from '../../imagenes/iconos/usuario.png';
import CarritoIcono from '../../imagenes/iconos/carrito.png';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar-seccion'>
            <Link to="/" className='link--titulo-logo'><h1 className='titulo-logo'>MAX LIBRERIA</h1></Link>
            <div className='contenedor-usuario'>
                <Link to="/admin"><img src={Usuario} alt='usuario' className='icono-usuario'/></Link>
                <Link to="/carrito"><img src={CarritoIcono} alt='carrito de compras' className='icono-carro'/></Link>
            </div>
            
            
        </div>
    )
}

export default Navbar;
