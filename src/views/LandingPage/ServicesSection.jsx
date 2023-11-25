import React from "react";
import {
  BuyButton,
  CardCost,
  CardDescription,
  CardTitle,
  ServiceCard,
  ServiceCardContainer,
  ServicesContainer,
  ServicesDescription,
  ServicesHeader,
} from "../../components/LandingPage/ServicesSection/styles";

import servicesData from "../../data/servicesData";

const ServicesSection = () => {
  const phoneNumber = "+524435797674";
  const message = encodeURIComponent("Me interesa aqduirir el servicio: ");
  return (
    <ServicesContainer id="services">
      <ServicesHeader>Servicios</ServicesHeader>
      <ServicesDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ServicesDescription>

      <ServiceCardContainer>
        {servicesData.map((item, index) => (
          <ServiceCard key={index}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            <CardCost>{item.cost}</CardCost>
            <BuyButton
              href={`https://wa.me/${phoneNumber}?text=${message}${item.title}`}
              target="_blank"
            >
              Comprar
            </BuyButton>
          </ServiceCard>
        ))}
      </ServiceCardContainer>
    </ServicesContainer>
  );
};

export default ServicesSection;
