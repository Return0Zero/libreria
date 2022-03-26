
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Carrito from './carrito'
import Home from './home'

function App() {
  
  return (
    
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
