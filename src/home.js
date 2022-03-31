
import './home.css';

import { Coleccion, Maxlibreria, Header, Navbar, Footer, Recomendados } from './contenedores';

function Home() {
  
  return (
    <div className="">
      <Navbar></Navbar>
      <Header></Header>
      <Recomendados></Recomendados>
      <Coleccion></Coleccion>
      <Maxlibreria></Maxlibreria>
      <Footer></Footer>
    </div>
  );
}

export default Home;