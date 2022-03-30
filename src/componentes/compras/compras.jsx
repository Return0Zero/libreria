import React from 'react';
import './compras.css';
import Principito from '../../imagenes/libros/el-principito.jpg'

const Compras = () => 
{
    return (
        <div className='componente-compras'>
            <h1>Compras</h1>
            <img src={Principito} alt='Foto de libro' className='foto-principito'/>
            <div><p>Hola</p></div> 
            <img src={Principito} alt='Foto de libro' className='foto-principito'/>
            <p>Hola</p>
            <img src={Principito} alt='Foto de libro' className='foto-principito'/>
            <p>Hola</p>
        </div>
    )
}
export default Compras;



