import React from 'react';
import './coleccion.css';
import BarraBusqueda from '../../componentes/barrabusqueda/barrabusqueda';
// import DataLibros from 'archivo para conectar la data';
import Linea from '../../imagenes/iconos/linea.svg'
import Libro from '../../componentes/libro/libro'

const Coleccion = () => {
    return (
        <div className='header-section'>
            <h1 className='coleccion-titulo'>NUESTRA COLECCIÓN</h1>
            <BarraBusqueda placeholder="Titulo, Autor, Género y más" /* ----- data={DataLibros} ----- */ ></BarraBusqueda>
            <div className='generosLibros'>
                <div className='generoDidactico'>
                    <div className='genero-titulo'>
                        <h2>Género Didáctico</h2>
                        <img src={Linea} alt="Linea Decorativa" className='lineaDecorativa' />
                    </div>
                    <div className='coleccion--libro-contenedor'>
                        <Libro></Libro>
                        <Libro></Libro>
                        <Libro></Libro>
                        <Libro></Libro>
                    </div>
                </div>
                <div className='generoDramatico'>
                    <div className='genero-titulo'>
                        <h2>Género Dramático</h2>
                        <img src={Linea} alt="Linea Decorativa" className='lineaDecorativa' />
                    </div>
                    <div className='coleccion--libro-contenedor'>
                        <Libro></Libro>
                        <Libro></Libro>
                        <Libro></Libro>
                        <Libro></Libro>
                    </div>

                </div>
                <div className='generoNarrativo'>
                    <div className='genero-titulo'>
                        <h2>Género Narrativo</h2>
                        <img src={Linea} alt="Linea Decorativa" className='lineaDecorativa' />
                    </div>
                    <div className='coleccion--libro-contenedor'>
                        <Libro></Libro>
                        <Libro></Libro>
                        <Libro></Libro>
                        <Libro></Libro>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Coleccion;
