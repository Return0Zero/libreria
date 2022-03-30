import React from 'react';
import './libro.css';
import Portada1 from '../../imagenes/libros/don-quijote-de-la-mancha.jpg'
import AgregarCarrito from '../../imagenes/iconos/boton-carro.png'
import AgregarFavorito from '../../imagenes/iconos/boton-favorito.png'

const Libro = ({NombreLibro}) => {
    return (
        <div className='componente-libro'>
            <img src={Portada1} alt='Foto de portada' className='foto-portada'/>
            <p>{NombreLibro}</p>
            <div className='libro--contenedor-botones'>
                <img src={AgregarCarrito} alt='Agregar Carrito' className='boton-carrito'/>
                <img src={AgregarFavorito} alt='Agregar Favorito' className='boton-favorito'/>
            </div>
        </div>
    )
}

export default Libro;
