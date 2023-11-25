import React from "react";
import {
  LocateUsContainer,
  LocateUsContent,
  LocateUsText,
  LocateUsHeaderText,
  LocateUsTextP,
  LocateUsLogoAndText,
} from "../../components/LandingPage/LocateUsSection/styles";
const LocateUsSection = () => {
  return (
    <LocateUsContainer id="locateus">
      <LocateUsContent>
        <LocateUsText>
          <LocateUsHeaderText>Contáctanos</LocateUsHeaderText>
          <LocateUsLogoAndText>
            <LocateUsTextP>
              Nos puedes ubicar en: Museo de Arte Moderno, Av. P.º de la Reforma
              s/n, Bosque de Chapultepec I Secc, Miguel Hidalgo, 11580 Miguel
              Hidalgo, CDMX
            </LocateUsTextP>
            &nbsp;
          </LocateUsLogoAndText>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15051.358926333001!2d-99.17883119999999!3d19.419329500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92b75aa014d%3A0x75a3b54be4cda224!2sMuseo%20de%20Arte%20Moderno!5e0!3m2!1ses-419!2smx!4v1700889438849!5m2!1ses-419!2smx"
            width="100vw"
            height="450"
            style={{
              border: "0",
              display: "block",
              margin: "0 auto", // Centra en el eje x
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </LocateUsText>
      </LocateUsContent>
    </LocateUsContainer>
  );
};

export default LocateUsSection;
