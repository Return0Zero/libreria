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
                <a href='/#idColeccion' className='CTA--coleccion'>
                    <p>Ver Colección</p>
                </a>
                <a href='/#idContactanos' className='CTA--contactanos'>
                    <p>Contactanos</p>
                </a>
            </div>
           
        </div>
    )
}

export default Header;
