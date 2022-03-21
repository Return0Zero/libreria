import React from 'react';
import './libro.css';
import Portada1 from '../../imagenes/libros/don-quijote-de-la-mancha.jpg'

const Libro = () => {
    return (
        <div className='Libro-seccion'>
            <img src={Portada1} alt='Foto de portada' className='foto-portada'/>
        </div>
    )
}

export default Libro;
