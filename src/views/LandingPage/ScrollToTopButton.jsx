import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { ScrollToTopButtonContainer } from "../../components/LandingPage/ScrollToTopButton/styles";
import { useNavigate } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Cambiar la ruta a "/" cuando el usuario hace clic en el botón de scroll
    navigate("/");
  };

  return (
    <ScrollToTopButtonContainer onClick={scrollToTop} $visible={isVisible}>
      <FontAwesomeIcon icon={faArrowUp} />
    </ScrollToTopButtonContainer>
  );
};

export default ScrollToTopButton;
