import React from 'react';
import './recomendados.css';
import Libro from '../../componentes/libro/libro.jsx';

const Recomendados = () => {
    return (
        <div className='recomendados-seccion'>
            <h1 className='recomendados-titulo'>RECOMENDADOS</h1>
            <div className='libros-recomendados'>
                <Libro></Libro>
                <Libro></Libro>
                <Libro></Libro>
                <Libro></Libro>
            </div>
        </div>
    )
}

export default Recomendados;
