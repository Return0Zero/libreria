import React from 'react';//Improtar parte de la sintaxis de react
import '././compras-libros.css';
import Principito from '../../imagenes/libros/el-principito.jpg'

const Compraslibros = () => //Programacion funcional de react en lugar de programacion orientada a objetos, por eso utilizamos esta constante para poder utilizar lo que aqui se establece
{
    return ( //jsx es una extension de react de la sintaxis de lenguaje de javascript, herramienta para estructurar componentes, el return regresa el jsx que termina siendo la version de html de react.
        <div className='componente-compras-libros'>
            <div>
            <h1 className='coleccion-carrito'><b>Carrito de Compras</b></h1>
            <img src={Principito} alt='Foto de libro' className='foto-principito'/>    
            </div> 
            <img src={Principito} alt='Foto de libro' className='foto-principito'/>
            <div>
            <img src={Principito} alt='Foto de libro' className='foto-principito'/> 
            </div> 
        </div>
            
    )
}
export default Compraslibros;