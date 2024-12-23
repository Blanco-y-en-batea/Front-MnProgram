import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from "./AppContext";
import ReactGA from "react-ga4"; // Importa React-GA4
import Home from "./pages/Home";
import Clinicas from "./pages/Clinicas";
import Abogados from "./pages/Abogados";
import TestPage from "./pages/TestPage";
import Asesorias from "./pages/Asesorias";
import Consulting from "./pages/Consulting";
import Limpieza from "./pages/Limpieza";
import Formacion from "./pages/Formacion";
import Ingenieros from "./pages/Ingenieros";
import Odontologos from "./pages/Odontologos";
import Arquitectos from "./pages/Arquitectos";
import Procuradores from "./pages/Procuradores";
import Servicios from "./pages/Servicios";
import FixedButtons from "./components/FixedButtons/FixedButtons";

const App: React.FC = () => {
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID; // Asegúrate de que esta variable esté definida en tu .env
    if (!GA_ID) {
      console.error("Google Analytics ID (VITE_GA_ID) no está definido.");
      return;
    }
    ReactGA.initialize(GA_ID); // Inicializa Google Analytics
    ReactGA.send("pageview"); // Envía la primera vista de página
  }, []);

  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/software-abogados-mk" element={<Abogados />} />
          <Route path="/software-arquitectos-mk" element={<Arquitectos />} />
          <Route path="/software-asesorias-mk" element={<Asesorias />} />
          <Route path="/software-clinicas-mk" element={<Clinicas />} />
          <Route path="/software-consulting-mk" element={<Consulting />} />
          <Route path="/software-formacion-mk" element={<Formacion />} />
          <Route path="/software-ingenieros-mk" element={<Ingenieros />} />
          <Route path="/software-limpieza-mk" element={<Limpieza />} />
          <Route path="/software-odontologos-mk" element={<Odontologos />} />
          <Route path="/software-procuradores-mk" element={<Procuradores />} />
          <Route path="/software-servicios-mk" element={<Servicios />} />
          <Route path="/test-page" element={<TestPage />} />
        </Routes>
        <FixedButtons />
      </Router>
    </AppProvider>
  );
};

export default App;
