import React from 'react';
import './libro.css';
import Portada1 from '../../imagenes/libros/don-quijote-de-la-mancha.jpg'
import AgregarCarrito from '../../imagenes/iconos/boton-carro.png'
import AgregarFavorito from '../../imagenes/iconos/boton-favorito.png'

const Libro = () => {
    return (
        <div className='Libro-seccion'>
            <img src={Portada1} alt='Foto de portada' className='foto-portada'/>
            <p>Don Quijote de la mancha</p>
            <div className='libro--contenedor-botones'>
                <img src={AgregarCarrito} alt='Agregar Carrito' className='boton-carrito'/>
                <img src={AgregarFavorito} alt='Agregar Favorito' className='boton-favorito'/>
            </div>
        </div>
    )
}

export default Libro;
