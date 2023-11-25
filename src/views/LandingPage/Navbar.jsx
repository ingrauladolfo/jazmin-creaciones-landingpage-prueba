import React from "react";
import Sidebar from "./Sidebar";
import {
  NavbarHeader,
  NavbarLogo,
  NavbarNav,
  NavbarTextContainer,
} from "../../components/LandingPage/Navbar/styles";
import logo from "../../assets/img/logo.jpeg";
// import { useTheme } from "./path-to-your-theme-context"; // Ajusta la ruta según tu estructura

const Navbar = () => {
  //   const { toggleTheme } = useTheme();

  return (
    <NavbarHeader>
      <NavbarNav>
        <Sidebar />
        {/* <NavbarLogoButton to="/">
          <NavbarLogo src={logo} alt="Jazmín Creaciones" />
        </NavbarLogoButton> */}
        <NavbarTextContainer>
          <NavbarLogo src={logo} />
          &nbsp; Jazmín Creaciones
        </NavbarTextContainer>
        {/* <NavbarMenu>
          <NavbarContentItem>
            <NavbarItem>
              <ThemeToggleButton onClick={toggleTheme}>
                Cambiar Tema
              </ThemeToggleButton>
            </NavbarItem>
          </NavbarContentItem>
        </NavbarMenu> */}
      </NavbarNav>
    </NavbarHeader>
  );
};

export default Navbar;
