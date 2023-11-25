import styled from "styled-components";
import hero from "../../../assets/img/hero.png";
export const HeroContainer = styled.main`
  width: 100%;
  margin: 0;
  text-align: center;
`;
export const HeroContainerBg = styled.section`
  padding: 80px 0;
  background-image: url(${hero});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  //   max-width: 100%;
  margin: 0 auto;
  height: auto;
  width: 100vw;
`;
export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  max-width: 1350px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    padding: 0 5%;
    width: 90%;
  }
  @media (max-width: 800px) {
    gap: 50px;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 0;
  }
`;
export const HeroLogo = styled.img`
  width: 300px;
  overflow-clip-margin: content-box;
  overflow: clip;
  @media (max-width: 650px) {
    width: 150px;
  }
`;
export const HeroTextContainer = styled.div`
  width: 500px;
  @media (max-width: 650px) {
    text-align: center;
    width: 100%;
  }
`;
export const HeroHeaderText = styled.h1`
  font-size: 2rem;
  color: black;
`;
export const HeroHeaderSubTextP = styled.p`
  font-size: 1.1rem;
  color: black;
`;
export const HeroTextSpan = styled.span`
  display: block;
  color: black;
`;
export const HeroButton = styled.a`
  margin: 0 auto;
  margin-top: 20px;
  display: table;
  cursor: pointer;
`;
export const HeroContentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #21bab5;
  color: #000000;
  border-radius: 100px;
  transition-duration: 0.3s;
  border: 4px solid #000000;
  &:hover {
    background-color: #000000;
    color: #cfd5dc;
    border: 4px solid #21bab5;
  }
`;
export const HeroSpanContentButton = styled.span`
  line-height: 20px;
  display: flex;
  font-weight: bold;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
