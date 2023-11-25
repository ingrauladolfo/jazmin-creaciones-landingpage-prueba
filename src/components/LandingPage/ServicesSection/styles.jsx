import styled from "styled-components";

export const ServicesContainer = styled.div`
  padding: 20px;
  background-color: #000000;
  text-align: center; /* Añadido para centrar ServicesHeader y ServicesDescription */
`;

export const ServicesHeader = styled.h2`
  display: block;
  font-size: 2em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Lato", cursive;
  color: #cfd5dc;
  font-weight: normal;
  text-transform: uppercase;
`;

export const ServicesDescription = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 1.5rem;
  color: #cfd5dc;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1400px) {
    flex-direction: row;
  }
`;

export const ServiceCard = styled.div`
  background-color: transparent;
  width: 100%;
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 5px;
  border-radius: 8px;
  @media (min-width: 769px) {
    width: calc(33.33% - 20px);
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  color: #cfd5dc;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 1em;
  color: #cfd5dc;
  margin-bottom: 10px;
`;

export const CardCost = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #cfd5dc;
  margin-bottom: 10px;
`;

export const BuyButton = styled.a`
  background-color: #000000;
  color: #cfd5dc;
  padding: 10px 15px;
  border: 4px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #21bab5;
    color: #000000;
    border: 4px solid #21bab5;
  }
`;
