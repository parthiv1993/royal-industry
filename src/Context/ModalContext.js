import { Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import styled from 'styled-components';

export const ModalContext = createContext();

const CenterAlignedModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContextProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  return (
    <ModalContext.Provider value={{ showModal: setModalContent }}>
      {modalContent && (
        <CenterAlignedModal open={!!modalContent} onClose={() => setModalContent(null)}>
          {modalContent}
        </CenterAlignedModal>
      )}
      {children}
    </ModalContext.Provider>
  );
};

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContext;
