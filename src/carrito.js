
import './carrito.css';
import Navbar from './contenedores/navbar/navbar';
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
      <h1>esta es la prueba del separado</h1>
    </div>
  );
}

export default Carrito;
