import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: 'white',
  },
});

export default responsiveFontSizes(theme);
