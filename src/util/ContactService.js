import {
  GOOGLE_MAPS_LINK,
  MAIL_BODY,
  MAIL_ID,
  MAIL_SUBJECT,
  PHONE_NUMBER,
} from '../data/contactInfo';

export const sendMessageOnWhatsapp = (text) => {
  const encoded = encodeURIComponent(text);
  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encoded}`);
};

export const locateIndustryOnMaps = () => {
  window.open(GOOGLE_MAPS_LINK);
};

export const callOwner = () => {
  window.open(`tel:${PHONE_NUMBER}`);
};

export const sendMail = ({ subject = MAIL_SUBJECT, body = MAIL_BODY }) => {
  window.open(`mailto:${MAIL_ID}?subject=${subject}&body=${body}`);
};
