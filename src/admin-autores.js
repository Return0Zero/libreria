
import './admin-autores.css';
import Footer from './contenedores/footer/footer';
import AdminNavbar from './admin-componentes/admin-navbar/admin-navbar';
import AdminCategorias from './admin-componentes/admin-categorias/admin-categorias';
import {Link} from 'react-router-dom';

function AdminAutores() {
  
  return (
    <div className="admin-autores">
        <AdminNavbar></AdminNavbar>
        <div  className="adminCuerpo">
          <AdminCategorias></AdminCategorias>
          <div>
            <div>

            </div>
            <div>
              
            </div>
          </div>
        </div>
        
        <Footer></Footer>
    </div>
  );
}

export default AdminAutores;
