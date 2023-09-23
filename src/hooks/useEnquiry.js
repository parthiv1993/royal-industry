import { createPortal } from 'react-dom';
// import { Portal } from '@mui/base/Portal';
import { Modal } from '@mui/base/Modal';
import { Box } from '@mui/material';

const useEnquiry = () => {
  const startEnquiry = () => {
    console.log('abc');
    const content = (
      <Modal open>
        <Box>
          <h2 id='unstyled-modal-title'>Text in a modal</h2>
          <p id='unstyled-modal-description'>Aliquid amet deserunt earum!</p>
        </Box>
      </Modal>
    );

    createPortal(content, document.body);
  };

  return { startEnquiry };
};

export default useEnquiry;
