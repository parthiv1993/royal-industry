import React, { useContext } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import { WhatsApp as WhatsAppIcon } from '@mui/icons-material';
import ModalContext from '../../Context/ModalContext';
import EnquiryForm from '../EnquiryForm';

const Footer = () => {
  const { showModal } = useContext(ModalContext);

  const abc = () => {
    showModal(
      <div style={{ background: 'white' }}>
        <EnquiryForm />
      </div>,
    );
  };
  return (
    <>
      <SpeedDial
        ariaLabel='SpeedDial basic example'
        FabProps={{ style: { background: 'green' } }}
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        onClick={abc}
        icon={<WhatsAppIcon />}
      />
    </>
  );
};

export default Footer;
