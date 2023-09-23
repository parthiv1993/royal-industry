import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  TextareaAutosize,
  Typography,
} from '@mui/material';
import translations from '../../translations';
import { useState } from 'react';
import products from '../../data/products';
import { sendMessageOnWhatsapp } from '../../util/ContactService';

const EnquiryForm = ({ product, length, width, weight, details }) => {
  const [formValues, setFormValues] = useState({
    product: product,
    length: length,
    width: width,
    weight: weight,
    details: details,
  });

  const handleFormChange = (field, ev) => {
    setFormValues((values) => ({ ...values, [field]: ev.target.value }));
    ev.preventDefault();
  };

  const sendEnquiry = () => {
    const message = `
      Product : ${formValues.product}

      length : ${formValues.length}

      width : ${formValues.width}

      weight : ${formValues.weight}

      details : ${formValues.details}
    `;

    sendMessageOnWhatsapp(message);
  };

  return (
    <Box style={{ minWidth: 340 }}>
      <Container
        style={{ paddingBlock: 16, textAlign: 'center', display: 'flex', flexDirection: 'column' }}
      >
        <Typography variant='h5' component='h3'>
          {translations.ENQUIRY.HEADING}
        </Typography>
        <Divider style={{ padding: 16 }} variant='inset' light />

        <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
          <FormControl fullWidth>
            <InputLabel id='product-interested-label'>
              {translations.ENQUIRY.PRODUCT_INTERESTED}
            </InputLabel>
            <Select
              id='product-interested-selection'
              value={formValues.product}
              label={translations.ENQUIRY.PRODUCT_INTERESTED}
              onChange={handleFormChange.bind(null, 'product')}
            >
              {products.map((prod) => (
                <MenuItem value={prod.id} key={prod.id}>
                  {prod.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <TextField
              id='length-value-label'
              label={translations.ENQUIRY.LENGTH}
              defaultValue={formValues.length}
              onChange={handleFormChange.bind(null, 'length')}
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              id='width-value-label'
              label={translations.ENQUIRY.WIDTH}
              defaultValue={formValues.width}
              onChange={handleFormChange.bind(null, 'width')}
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              id='width-value-label'
              label={translations.ENQUIRY.WEIGHT}
              defaultValue={formValues.width}
              onChange={handleFormChange.bind(null, 'weight')}
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth>
            <TextareaAutosize
              placeholder={translations.ENQUIRY.MORE_DETAILS}
              minRows={3}
              id='details-value-label'
              label={translations.ENQUIRY.MORE_DETAILS}
              defaultValue={formValues.details}
              onChange={handleFormChange.bind(null, 'details')}
            />
          </FormControl>
        </div>

        <Button variant='contained' style={{ marginBlock: 16 }} onClick={sendEnquiry}>
          {translations.ENQUIRY.SEND_ENQUIRY_ON_WHATSAPP}
        </Button>
      </Container>
    </Box>
  );
};

EnquiryForm.propTypes = {
  product: PropTypes.string,
  length: PropTypes.string,
  width: PropTypes.string,
  weight: PropTypes.string,
  details: PropTypes.string,
};

EnquiryForm.defaultProps = {
  product: '',
  length: '',
  width: '',
  weight: '',
  details: '',
};

export default EnquiryForm;
