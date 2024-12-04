import React, { useEffect } from "react";
import Header from "../components/Header";
import HeroComponent from "../components/HeroComponent";
import pageData from "../data/data";
import { useAppContext } from "../AppContext";
import { useLocation } from "react-router-dom"; // Importa useLocation para obtener la ruta actual

const Abogados: React.FC = () => {
  const { setHeroData } = useAppContext(); // Accedemos a la función para actualizar los datos del contexto
  const location = useLocation(); // Obtiene la ruta actual

  useEffect(() => {
    const pageName = location.pathname.split("/")[1].toLowerCase();
    console.log(pageData);

    // Si la página corresponde a un nombre en pageData, establecemos los datos correspondientes
    if (pageData[pageName]) {
      setHeroData(pageData[pageName].hero); // Establecer los datos completos del héroe basados en la página actual
    }
  }, [location, setHeroData]);

  return (
    <div>
      <Header />
      <HeroComponent />
    </div>
  );
};

export default Abogados;
