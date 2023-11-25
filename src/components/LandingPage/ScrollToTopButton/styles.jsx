import styled from "styled-components";

export const ScrollToTopButtonContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #21bab5;
  border: 4px solid #000000;
  color: #000000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.$visible ? 1 : 1)};
  transition: opacity 0.3s ease;
  z-index: 10000;
  &:hover {
    background-color: #000000;
    border: 4px solid #21bab5;
    color: #cfd5dc;
  }

  svg {
    font-size: 24px;
  }
`;
