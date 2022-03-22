import React from 'react';
import './maxlibreria.css';
import FooterDeco from '../../imagenes/footer-deco.svg'
import Llamada from '../../imagenes/iconos/llamada.png'
import Email from '../../imagenes/iconos/email.png'

const Maxlibreria = () => {
    return (
        <div className='maxlibreria-section'>
            <img src={FooterDeco} alt="Decoracion del footer" className='footerDeco' />
            <div>
                <h1 className='titulo-maxlibreria'>QUIÉNES SOMOS</h1>
                <p className='maxilibreria--contenido'>MAX Libreria fue concebida con el fin de reunir el catálogo de todas las librerías y libreros de Latinoamérica en un único sitio, proporcionando al lector un mecanismo fácil para realizar búsquedas y compras de cualquier tipo de libro. Proporcionando además un mecanismo eficiente de ventas para el librero.</p>
                <p className='maxilibreria--contenido'>Los lectores ahora pueden buscar desde la comodidad de sus casas el libro que desean y comprarlo por el mejor precio que encuentren. Los libreros ahora cuentan con muchos más clientes y pueden ofrecer sus libros a lectores que están a centenas de kilómetros de distancia.</p>
                <div className='contenedor-contacto'>
                    <div className='llamada'>
                        <img src={Llamada} alt="llamada icono" className='llamada-icono' />
                        <div>
                            <p className='maxlibreria--info'>Línea de atención al cliente</p>
                            <p>(504) 2000-0000</p>
                        </div>
                    </div>
                    <div className='email'>
                        <img src={Email} alt="Email icono" className='email-icono' />
                        <div>
                            <p className='maxlibreria--info'>Correo electrónico</p>
                            <p>max-libros@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Maxlibreria;
