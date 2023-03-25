import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/LoginForm';
import Crear_cuenta from './pages/Crear_cuenta';
import Reservacion from "./pages/Reservacion";

function App() {
  return (
    /*    
          <Route path="/Historial Medico" exact Component={Reservacion} />
    */

    <div>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Crear_cuenta" element={<Crear_cuenta />} />
          <Route path="/Reservacion" element={<Reservacion />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;