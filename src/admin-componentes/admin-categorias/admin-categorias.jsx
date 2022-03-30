import React from 'react';
import './admin-categorias.css';
import {Link} from 'react-router-dom';

const AdminCategorias = () => {
    return (
        <div className='admin--categorias-seccion'>
            <div>
            <Link to="/admin-libros" className=''>Libros</Link>
            </div>
            <div>
            <Link to="/admin-usuarios" className=''>Usuarios</Link>
            </div>
            <div>
            <Link to="/admin-autores" className=''>Autores</Link>
            </div>
            <div>
            <Link to="/admin-generos" className=''>Generos</Link>
            </div>
        </div>
    )
}

export default AdminCategorias;
