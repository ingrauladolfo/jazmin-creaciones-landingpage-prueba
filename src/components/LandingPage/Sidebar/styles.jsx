import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarLogoAndBarsContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
export const SidebarContainer = styled.div`
  max-width: 1920px;
  margin: auto auto;
  width: 100vw;
  height: 100%;
  background-color: #21bab5;
  position: fixed;
  top: 0;
  left: ${(props) => (props.$showSidebar ? "0" : "-100vw")};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  text-align: center;
  @media (max-width: 768px) {
    width: 100vw;
    left: ${(props) => (props.$showSidebar ? "0" : "-100vw")};
  }
  @media (max-width: 400px) {
    width: 100vw;
    left: ${(props) => (props.$showSidebar ? "0" : "-100vw")};
  }
`;
export const SidebarItem = styled.div`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #555;
  }
`;
export const SidebarNavText = styled(Link)`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => (props.$isActive ? "black" : "white")};
  text-decoration: ${(props) => (props.$isActive ? "underline" : "none")};
  &:hover {
    color: ${(props) => (props.$isActive ? "black" : "white")};
    text-decoration: ${(props) =>
      props.$isActive ? "underline" : "underline"};
  }
`;
export const SidebarTextContainer = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  color: white;
`;

export const SidebarCloseButton = styled.button`
  text-decoration: none;
  color: white;

  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  &:hover {
    background-color: transparent;
  }
`;
