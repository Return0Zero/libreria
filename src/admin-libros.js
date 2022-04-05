import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './admin-autores.css';
import Footer from './contenedores/footer/footer';
import AdminNavbar from './admin-componentes/admin-navbar/admin-navbar';
import AdminCategorias from './admin-componentes/admin-categorias/admin-categorias';


import data from "./mockdata.json"

function AdminLibros () {
  
  const [autores, agregarAutores] = useState(data);
  const [agregarFormData, guardarAgregarFormData] = useState({
    nombre: '',
    apellidos: '',
    genero: '',
    fechaDeNacimiento: '',
    generoLiterario: '',
  })

  const manejarCambiosForm = (event) => {
    event.preventDefault();

    const espacioNombre = event.target.getAttribute('name');
    const espacioContenido = event.target.value;

    const nuevaDataForm = { ...agregarFormData };
    nuevaDataForm[espacioNombre] = espacioContenido;

    guardarAgregarFormData(nuevaDataForm);
  };

  const manejarSubmitForm = (event) => {
    event.preventDefault();

    const nuevoAutor = {
      id: nanoid(),
      nombre: agregarFormData.nombre,
      apellidos: agregarFormData.apellidos,
      genero: agregarFormData.genero,
      fechaDeNacimiento: agregarFormData.fechaDeNacimiento,
      generoLiterario: agregarFormData.generoLiterario,
    };

    const nuevosAutores = [...autores, nuevoAutor];
    agregarAutores(nuevosAutores);
  };

  return (
    <div className="admin-autores">
        <AdminNavbar></AdminNavbar>
        <div  className="admin--autores-Cuerpo">
          <AdminCategorias></AdminCategorias>
          <div>
            
            <h1>Gestionador de Autores</h1>
            <div className='autores-form'>
              <form className='form--container' onSubmit={manejarSubmitForm}>
                <div>
                  <label>Nombre</label>
                  <input className='input' type='text' placeholder='Nombre' name='nombre' onChange={manejarCambiosForm} required/>
                </div>
                <div>
                  <label>Apellido</label>
                  <input className='input' type='text' placeholder='Apellidos' name='apellidos' onChange={manejarCambiosForm} required/>
                </div>
                <div>
                  <label>Genero</label>
                  <select name='genero' required onChange={manejarCambiosForm}>
                    <option value="" disabled selected hidden>-</option>
                    <option>Masculino</option>
                    <option>Femenino</option>
                  </select>
                </div>
                <div>
                  <label>Fecha de Nacimiento</label>
                  <input className='input' type='date' name='fechaDeNacimiento' onChange={manejarCambiosForm} required/>
                </div>
                <div>
                  <label>Genero Literario</label>
                  <select name='generoLiterario' required onChange={manejarCambiosForm}>
                    <option value="" disabled selected hidden>-</option>
                    <option>Dramatico</option>
                    <option>Didactico</option>
                    <option>Narrativo</option>
                  </select>
                </div>
                <button type='submit'>Agregar</button>
              </form>
            </div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Nombre del Autor</th>
                    <th>Apellido del Autor</th>
                    <th>Genero</th>
                    <th>Fecha de Nacimiento</th>
                    <th>Genero Literario</th>
                  </tr>
                </thead>
                <tbody>
                  {autores.map((autor)=> 
                  <tr>
                    <th>{autor.nombre}</th>
                    <th>{autor.apellidos}</th>
                    <th>{autor.genero}</th>
                    <th>{autor.fechaDeNacimiento}</th>
                    <th>{autor.generoLiterario}</th>
                  </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <Footer></Footer>
    </div>
  );
}

export default AdminLibros;