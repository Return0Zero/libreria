import React from 'react';
import './navbar.css';
import Usuario from '../../imagenes/iconos/usuario.png'
import Carrito from '../../imagenes/iconos/carrito.png'

const Navbar = () => {
    return (
        <div className='navbar-seccion'>
            <h1 className='titulo-logo'>MAX LIBRERIA</h1>
            <div className='contenedor-usuario'>
                <div className='contenedor--icono-usuario'>
                    <img src={Usuario} alt='usuario' className='icono-usuario' />
                <p>Usuario</p>
                </div>
                <div className='contenedor--icono-carrito'>
                    <img src={Carrito} alt='carrito de compras' className='icono-carro'/>
                </div>
            </div>
            
            
        </div>
    )
}

export default Navbar;
