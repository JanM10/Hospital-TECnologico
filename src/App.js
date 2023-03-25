/*import "./App.css"*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/LoginForm';
import Crear_cuenta from './pages/Crear_cuenta';
import Reservacion from "./pages/Reservacion";
import Historial_Medico from "./pages/Historial_medico";
import CrudApp from "./components/CrudApp";

function App() {
  return (
    /*
          <Router>
        <Routes>
          <Route index element={<CrudApp />} />
          <Route path="/Crear_cuenta" element={<Crear_cuenta />} />
          <Route path="/Reservacion" element={<Reservacion />} />
          <Route path="/Historial_Medico" element={<Historial_Medico />} />
        </Routes>
      </Router>
    */ 

    <div>
      <CrudApp />
    </div>

  );
}

export default App;