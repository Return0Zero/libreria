
import './admin-libros.css';
import Footer from './contenedores/footer/footer';
import AdminNavbar from './admin-componentes/admin-navbar/admin-navbar';
import AdminCategorias from './admin-componentes/admin-categorias/admin-categorias';
import {Link} from 'react-router-dom';

function AdminLibros() {
  
  return (
    <div className="admin-libros">
        <AdminNavbar></AdminNavbar>
        <div  className="adminCuerpo">
          <AdminCategorias></AdminCategorias>
          <h1>admin libros</h1>
        </div>
        
        <Footer></Footer>
    </div>
  );
}

export default AdminLibros;
