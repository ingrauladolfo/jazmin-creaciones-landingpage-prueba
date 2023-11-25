// components/LandingPage/SocialMediaButtons/styles.js
import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
  opacity: ${(props) => (props.$visible ? 1 : 1)};
  transition: opacity 0.3s ease;
`;

export const SocialMediaButton = styled.a`
  background-color: #21bab5;
  border: 4px solid #000000;
  color: #000000;
  border-radius: 50%;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #000000;
    border: 4px solid #21bab5;
    color: #cfd5dc;
  }
  /* Asegura que el contenedor tenga un tamaño fijo */
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #000000;
    border: 4px solid #21bab5;
  }

  svg {
    font-size: 18px; /* Ajusta el tamaño del ícono según tus preferencias */
  }
`;
