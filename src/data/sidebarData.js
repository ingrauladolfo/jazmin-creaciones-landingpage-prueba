// sidebarData.js
import {
  faHome,
  faIdCard,
  faMapLocation,
  faTools,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const sidebarData = [
  { path: "#", title: "Inicio", icon: faHome, sectionId: "home" },
  { path: "/#about", title: "Acerca de", icon: faUser, sectionId: "about" },
  {
    path: "/#services",
    title: "Servicios",
    icon: faTools,
    sectionId: "services",
  },
  {
    path: "/#locateus",
    title: "Localízanos",
    icon: faMapLocation,
    sectionId: "locateus",
  },
  // Agrega más rutas y títulos según sea necesario
];

export default sidebarData;
