import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './pages/LoginForm';
/*import Crear_cuenta from './pages/Crear_cuenta';*/
/*import 'bootstrap/dist/css/bootstrap.min.css'*/
import Navbar from "./components/Navbar";
import CrudApiR from "./components/Reservacion/CrudApiR";
import CrudApiP from "./components/CrudApiP";
import CrudApiH from "./components/Historial/CrudApiH";


function App() {
  return (

    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/Paciente" element={<CrudApiP />} />
          <Route path="/Reservacion" element={<CrudApiR />} />
          <Route path="/Historial_Medico" element={<CrudApiH />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;