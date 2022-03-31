import React from 'react';
import './compras.css';
import Principito from '../../imagenes/libros/el-principito.jpg'
import ComprasLibros from '../compras-libros/compras-libros'


const Compras = () => 
{
    return (
        <div className='componente-compras'>
            <ComprasLibros></ComprasLibros>
        </div>
    )
}
export default Compras;



