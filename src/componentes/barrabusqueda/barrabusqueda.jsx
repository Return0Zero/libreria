import React, { useState } from 'react';
import './barrabusqueda.css';
import Lupa from '../../imagenes/iconos/lupa.png'

const BarraBusqueda = ({ placeholder, data}) => {

    const [dataFiltrada, colocarDataFiltrada] =useState([])
    const obtenerFiltro =(event) => {
        const palabraBuscada = event.target.value
        const nuevoFiltro = data.filter((value) => {
            return value.titulo.toLowerCase().includes(palabraBuscada.toLowerCase());
        });

        if (palabraBuscada === "") {
            colocarDataFiltrada([]);
        } else {
            colocarDataFiltrada(nuevoFiltro)
        }
        colocarDataFiltrada(nuevoFiltro);
    };
    
    return (
        <div className='barrabusqueda-seccion'>
            <div className='seccion-inputBusqueda'>
                <input type="text" placeholder={placeholder} className="inputBusqueda" onChange={obtenerFiltro} />
                <div className='contenedor--icono-busqueda'> <img src={Lupa} alt="lupa" className='icono-busqueda' /> </div>
            </div>
            {dataFiltrada.length != 0 && (
            <div className='resultadoData'>
                {dataFiltrada.map((value, key) => {
                    return (
                        <div className='dataLibros'>
                            <p>{value.titulo}</p>
                        </div>
                    
                    
                    );
                })}
            </div>
            )}
            </div>
    )
}

export default BarraBusqueda;
