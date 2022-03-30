
import './admin.css';
import Footer from './contenedores/footer/footer';
import AdminNavbar from './admin-componentes/admin-navbar/admin-navbar';
import {Link} from 'react-router-dom';
/** import AdminLibros from './admin-libros';
import AdminUsuarios from './admin-usuarios';
import AdminAutores from './admin-autores';
import AdminGeneros from './admin-generos'; **/

function Admin() {
  
  return (
    <div className="adminApp">
      <AdminNavbar></AdminNavbar>
      <div className="adminCuerpo">
          <h1>¿Qué deseas agregar?</h1>
          <div>
              <Link to="/admin-libros" className=''>Libros</Link>
              <Link to="/admin-usuarios" className=''>Usuarios</Link>
              <Link to="/admin-autores" className=''>Autores</Link>
              <Link to="/admin-generos" className=''>Generos</Link>
          </div>
          
      </div>
      
    </div>
  );
}

export default Admin;
