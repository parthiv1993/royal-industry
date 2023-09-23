import React from 'react';
import { Button, Grid, CardActions, Typography } from '@mui/material';
import translations from '../../translations';
import {
  WhatsApp as WhatsAppIcon,
  Place as PlaceIcon,
  Call as CallIcon,
  Mail as MailIcon,
} from '@mui/icons-material';
import { ContactCard, ContactCardContent } from './Contact.style';
import { callOwner, locateIndustryOnMaps, sendMail, sendMessageOnWhatsapp } from './ContactService';

const ContactUsForm = () => {
  const onWhatsAppClick = (e) => {
    sendMessageOnWhatsapp();
    e.preventDefault();
  };

  const onMapClick = (e) => {
    locateIndustryOnMaps();
    e.preventDefault();
  };

  const onCall = (e) => {
    callOwner();
    e.preventDefault();
  };

  const onMail = (e) => {
    sendMail();
    e.preventDefault();
  };
  return (
    <Grid container spacing={2}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <ContactCard>
          <ContactCardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {translations.CONTACT_US.OWNER_INFO}
            </Typography>
            <Typography gutterBottom variant='h5' component='h5'>
              {translations.CONTACT_US.OWNER_NAME}
            </Typography>
          </ContactCardContent>
          <CardActions>
            <Button variant='contained' onClick={onMail} endIcon={<MailIcon fontSize='large' />}>
              {translations.CONTACT_US.MAIL}
            </Button>
          </CardActions>
        </ContactCard>
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12}>
        <ContactCard>
          <ContactCardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {translations.CONTACT_US.ADDRESS}
            </Typography>

            <Typography gutterBottom variant='b5' component='article'>
              {translations.CONTACT_US.ADDRESS_VALUE}
            </Typography>
          </ContactCardContent>
          <CardActions>
            <Button
              variant='contained'
              onClick={onMapClick}
              endIcon={<PlaceIcon fontSize='large' />}
            >
              {translations.CONTACT_US.MAP}
            </Button>
          </CardActions>
        </ContactCard>
      </Grid>

      <Grid item lg={4} md={4} sm={12} xs={12}>
        <ContactCard>
          <ContactCardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {translations.CONTACT_US.CONTACT_NUMBER}
            </Typography>

            <Typography gutterBottom variant='b5' component='article'>
              {translations.CONTACT_US.PHONE_NUMBER}
            </Typography>
          </ContactCardContent>
          <CardActions>
            <Button
              variant='contained'
              onClick={onWhatsAppClick}
              endIcon={<WhatsAppIcon fontSize='large' />}
            >
              {translations.CONTACT_US.WHATSAPP}
            </Button>

            <Button variant='contained' onClick={onCall} endIcon={<CallIcon fontSize='large' />}>
              {translations.CONTACT_US.CALL_US}
            </Button>
          </CardActions>
        </ContactCard>
      </Grid>
    </Grid>
  );
};

export default ContactUsForm;
