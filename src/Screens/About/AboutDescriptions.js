import translations from '../../translations';
import { Typography } from '@mui/material';

const AboutDescriptions = () => {
  return (
    <>
      <Typography>{translations.ABOUT.PARA1}</Typography>
      <br />
      <br />
      <Typography>{translations.ABOUT.PARA2}</Typography>
      <br />
      <br />
      <Typography>{translations.ABOUT.PARA3}</Typography>
      <br />
      <br />
      <Typography>{translations.ABOUT.PARA4}</Typography>
      <br />
      <br />
      <Typography>{translations.ABOUT.PARA5}</Typography>
      <br />
      <br />
    </>
  );
};

export default AboutDescriptions;
