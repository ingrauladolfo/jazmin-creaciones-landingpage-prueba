import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const phoneNumber = "+524435797674";
const message = encodeURIComponent("Me interesa alguno de tus servicios");
// socialMediaData.js
const socialMediaData = [
  {
    link: `https://wa.me/${phoneNumber}?text=${message}`,
    icon: faWhatsapp,
  },
  {
    link: "https://www.instagram.com/jazmin_creaciones_by_ac/",
    icon: faInstagram,
  },
  {
    link: "https://www.facebook.com/jazmincreacionesbyac",
    icon: faFacebook,
  },
];
export default socialMediaData;
