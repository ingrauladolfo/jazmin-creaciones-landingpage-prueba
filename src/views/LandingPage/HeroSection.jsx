import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroContainerBg,
  HeroContent,
  HeroContentButton,
  HeroHeaderSubTextP,
  HeroHeaderText,
  HeroLogo,
  HeroSpanContentButton,
  HeroTextContainer,
  HeroTextSpan,
} from "../../components/LandingPage/HeroSection/styles";
import logo from "../../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
const HeroSection = () => {
  return (
    <HeroContainer id="">
      <HeroContainerBg>
        <HeroContent>
          <HeroLogo src={logo} />
          <HeroTextContainer>
            <HeroHeaderText>¡Sean bienvenidos!</HeroHeaderText>
            <HeroHeaderSubTextP>
              <HeroTextSpan>Nosotros somos Jazmín creaciones.</HeroTextSpan>
            </HeroHeaderSubTextP>
          </HeroTextContainer>
        </HeroContent>
        <HeroButton href="#about">
          <HeroContentButton>
            <HeroSpanContentButton>
              Conócenos
              <FontAwesomeIcon
                icon={faArrowDown}
                style={{
                  fill: "#cfd5dc",
                  width: "20px",
                  height: "20px",
                  transitionDuration: "0.3s",
                  overflowClipMargin: "content-box",
                  overflow: "hidden",
                }}
              />
            </HeroSpanContentButton>
          </HeroContentButton>
        </HeroButton>
      </HeroContainerBg>
    </HeroContainer>
  );
};

export default HeroSection;
