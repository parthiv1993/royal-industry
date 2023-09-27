import { indigo, lightBlue } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: indigo,
    secondary: lightBlue,
  },
});

export default responsiveFontSizes(theme);
