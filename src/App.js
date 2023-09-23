import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import { Container } from '@mui/material';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ModalContextProvider } from './Context/ModalContext';

function App() {
  return (
    <ModalContextProvider>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <Header />
          <div style={{ paddingBlock: 16 }}>
            <Container>
              <Outlet />
            </Container>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </ModalContextProvider>
  );
}

export default App;
