// components/SocialMediaButtons.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SocialMediaButton,
  SocialMediaContainer,
} from "../../components/LandingPage/SocialMediaButtons/styles";
import socialMediaData from "../../data/socialMediaData";

const SocialMediaButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SocialMediaContainer $visible={isVisible}>
      {socialMediaData.map((item, index) => (
        <SocialMediaButton
          key={index}
          href={item.link}
          $isActive={window.location.pathname === item.path}
          target="_blank"
        >
          <FontAwesomeIcon icon={item.icon} size="5x" />
        </SocialMediaButton>
      ))}
    </SocialMediaContainer>
  );
};

export default SocialMediaButtons;
