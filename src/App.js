import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './pages/LoginForm';
/*import Crear_cuenta from './pages/Crear_cuenta';*/
import Historial_Medico from "./pages/Historial_medico";
/*import 'bootstrap/dist/css/bootstrap.min.css'*/
import Navbar from "./components/Navbar";
import CrudApiP from "./components/CrudApiR";
import Paciente from "./pages/Paciente";


function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Paciente" element={<Paciente />} />
          <Route path="/Reservacion" element={<CrudApiP />} />
          <Route path="/Historial_Medico" element={<Historial_Medico />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;