import React from 'react';
import './header.css';
import ImagenFondo from '../../imagenes/imagen-fondo.png';

const Header = () => {
    return (
        <div className='header-seccion'>
            <img src={ImagenFondo} alt='imagen de fondo' className='imagen-fondo'/>
            <p className='header--titulo'>¡Libros! Los libros son el regalo más grande que una persona puede dar a otra.
            </p>
            <div className='CTA--contenedor'>
                <div className='CTA--coleccion'>
                    <p>Ver Colección</p>
                </div>
                <div className='CTA--contactanos'>
                    <p>Contactanos</p>
                </div>
            </div>
           
        </div>
    )
}

export default Header;
