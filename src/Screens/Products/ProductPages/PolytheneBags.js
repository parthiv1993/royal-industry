import { Paper, Grid } from '@mui/material';
import translations from '../../../translations';
import { useNavigate } from 'react-router-dom';
import DataTable from '../../../Components/DataTable';
import {
  Image,
  ImageContainer,
  ProductDescription,
  ProductDetailContainer,
  ProductTitle,
} from './ProductPage.style';
import products from '../../../data/products';

const PolytheneBags = () => {
  const navigate = useNavigate();

  const productLink = window.location.href.split('/').splice(-1)[0];
  const product = products.find((prod) => prod.link === productLink);

  if (!product) {
    navigate('home');
  }

  const { name, imageUrl, description } = product;

  const data = [
    {
      key: translations.PRODUCT_DETAILS.COMMON.PRICE,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.PRICE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.MOQ,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.MOQ,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.BUSINESS_TYPE,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.BUSINESS_TYPE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.COUNTRY_OF_ORIGIN,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.COUNTRY_OF_ORIGIN,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.MATERIAL,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.MATERIAL,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.PLASTIC_TYPE,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.PLASTIC_TYPE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.APPLICATION,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.APPLICATION,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.THICKNESS,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.THICKNESS,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.SIZE,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.SIZE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.COLOR,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.COLOR,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.CUSTOM_ORDER,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.CUSTOM_ORDER,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.PRODUCT_CODE,
      value: translations.PRODUCT_DETAILS.POLYTHENE_BAGS.PRODUCT_CODE,
    },
  ];

  return (
    <Paper elevation={6}>
      <Grid container>
        <ImageContainer item>
          <Image src={imageUrl} />
        </ImageContainer>

        <ProductDetailContainer item>
          <ProductTitle>{name}</ProductTitle>
          <br />
          <ProductDescription>{description}</ProductDescription>
          <br />
          <DataTable data={data} />
        </ProductDetailContainer>
      </Grid>
    </Paper>
  );
};

export default PolytheneBags;
