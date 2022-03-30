
import './carrito.css';
import Navbar from './contenedores/navbar/navbar';
import Footer from './contenedores/footer/footer';
import Compras from './componentes/compras/compras';
import DatosPersonales from './componentes/datospersonales/datospersonales';
import Total from './componentes/total/total';

function Carrito() {
  
  return (
    <div className="carritoApp">
      <Navbar></Navbar>
      <div>
        <Compras></Compras>
        <DatosPersonales></DatosPersonales>
        <Total></Total>
      </div>
      <Footer></Footer>
      
    </div>
  );
}

export default Carrito;
