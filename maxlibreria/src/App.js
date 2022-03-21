
import './App.css';

import { Coleccion, Maxlibreria, Header, Navbar, Footer, Recomendados } from './contenedores';

function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Recomendados></Recomendados>
      <Coleccion></Coleccion>
      <Maxlibreria></Maxlibreria>
      <Footer></Footer>
    </div>
  );
}

export default App;
