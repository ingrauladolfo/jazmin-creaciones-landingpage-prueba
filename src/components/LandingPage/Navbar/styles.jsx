import styled from "styled-components";

export const NavbarHeader = styled.header`
  max-width: 100%;
  margin: 0 auto;
  display: block;
  background-color: #21bab5;
  position: fixed;
  width: 100vw;
`;
export const NavbarNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1350px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
  }
`;
export const NavbarTextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: inherit;
  font-weight: bold;
  margin-left: 10px;
  color: white;
`;
export const NavbarLogo = styled.img`
  height: 50px;
  margin: 10px 0;
  overflow: clip;
  overflow-clip-margin: content-box;
`;
