import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import { Container } from '@mui/material';

import Header1 from './Components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header1 />
        <div style={{ paddingBlock: 16 }}>
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
