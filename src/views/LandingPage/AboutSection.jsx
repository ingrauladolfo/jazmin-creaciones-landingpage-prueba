import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutText,
  AboutHeaderText,
  AboutTextP,
  AboutLogo,
  AboutLogoAndText,
} from "../../components/LandingPage/AboutSection/styles";
import logo from "../../assets/img/logo.jpeg";
const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutText>
          <AboutHeaderText>¿Quiénes somos?</AboutHeaderText>
          <AboutLogoAndText>
            <AboutTextP>
              Jazmín Creaciones es una tienda de amigurumis nacida en Morelia en
              el año 2020
            </AboutTextP>
            &nbsp;
            <AboutLogo src={logo} alt="Logo" />
          </AboutLogoAndText>
        </AboutText>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
