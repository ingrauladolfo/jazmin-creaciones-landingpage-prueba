// MainRoutes.jsx
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../components/global/Header";
import LandingPage from "../views/LandingPage/index";
import AboutSection from "../views/LandingPage/AboutSection";
import { routeToTitle, routeAliases } from "../data/routeTitles"; // Importa el nuevo archivo
import ServicesSection from "../views/LandingPage/ServicesSection";
import LocateUsSection from "../views/LandingPage/LocateusSection";

const MainRoutes = () => {
  useEffect(() => {
    // Función para manejar cambios en la ubicación y actualizar el título
    const handleRouteChange = () => {
      // Obtén la ruta actual
      const currentPath = window.location.pathname + window.location.hash;

      // Encuentra el título correspondiente a la ruta actual, utilizando alias si es necesario
      const title = findTitleForPath(currentPath);

      // Establece el título de la página según la ruta actual
      document.title = title || "Jazmín Creaciones | Not found";
    };

    // Agrega un listener para manejar cambios en la ubicación
    window.addEventListener("hashchange", handleRouteChange);

    // Llama a handleRouteChange para establecer el título inicial
    handleRouteChange();

    // Limpia el listener al desmontar el componente
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, []);

  // Función para encontrar el título correspondiente a la ruta actual, utilizando alias si es necesario
  const findTitleForPath = (path) => {
    // Intenta encontrar la ruta directa
    let matchingRoute = routeToTitle[path] || null;

    // Si no hay una ruta directa, busca utilizando el alias
    if (!matchingRoute) {
      const alias = routeAliases[path];
      matchingRoute = alias ? routeToTitle[alias] : null;
    }

    return matchingRoute ? matchingRoute : null;
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/#about" element={<AboutSection />} />
        <Route path="/#services" element={<ServicesSection />} />
        <Route path="/#locateus" element={<LocateUsSection />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </Router>
  );
};

export default MainRoutes;
