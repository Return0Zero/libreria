
import './App.css';
import { Routes, Route } from "react-router-dom";
import Carrito from './carrito'
import Home from './home'
import Admin from './admin'
import AdminLibros from './admin-libros';
import AdminUsuarios from './admin-usuarios';
import AdminAutores from './admin-autores';
import AdminGeneros from './admin-generos';

function App() {
  
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-libros" element={<AdminLibros />} />
        <Route path="/admin-usuarios" element={<AdminUsuarios />} />
        <Route path="/admin-autores" element={<AdminAutores />} />
        <Route path="/admin-generos" element={<AdminGeneros />} />
      </Routes>
    </div>
  );
}

export default App;
