import React from "react";
/*import "./App.css"*/
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from './pages/LoginForm';
/*import Crear_cuenta from './pages/Crear_cuenta';
import Reservacion from "./pages/Reservacion";
import Historial_Medico from "./pages/Historial_medico";
import 'bootstrap/dist/css/bootstrap.min.css'*/
import Header from "./components/Header";
import CrudApiP from "./components/CrudApiP";
import Navbar from "./components/Navbar";


function App() {
  return (
    /*
        <React.Fragment>
      <Navbar />
    </React.Fragment>
    
          <Router>
        <Routes>
          <Route index element={<CrudApiP />} />
          <Route path="/Crear_cuenta" element={<Crear_cuenta />} />
          <Route path="/Reservacion" element={<Reservacion />} />
          <Route path="/Historial_Medico" element={<Historial_Medico />} />
        </Routes>
      </Router>
     */
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CrudApiP />} />
          <Route path="/Login" element={<LoginForm />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;