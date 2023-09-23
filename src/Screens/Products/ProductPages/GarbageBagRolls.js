import { Paper, Grid } from '@mui/material';
import translations from '../../../translations';
import DataTable from '../../../Components/DataTable';
import {
  Image,
  ImageContainer,
  ProductDescription,
  ProductDetailContainer,
  ProductTitle,
} from './ProductPage.style';
import { useNavigate } from 'react-router-dom';
import products from '../../../data/products';

const GarbageBagRolls = () => {
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
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.PRICE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.MOQ,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.MOQ,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.BUSINESS_TYPE,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.BUSINESS_TYPE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.SIZE,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.SIZE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.MATERIAL,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.MATERIAL,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.APPLICATION,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.APPLICATION,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.COUNTRY_OF_ORIGIN,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.COUNTRY_OF_ORIGIN,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.PLASTIC_TYPE,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.PLASTIC_TYPE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.CUSTOM_ORDER,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.CUSTOM_ORDER,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.COLOR,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.COLOR,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.BRAND_NAME,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.BRAND_NAME,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.FEATURE,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.FEATURE,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.STARSEAL,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.STARSEAL,
    },
    {
      key: translations.PRODUCT_DETAILS.COMMON.PRODUCT_CODE,
      value: translations.PRODUCT_DETAILS.GARBAGE_BAG_ROLLS.PRODUCT_CODE,
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

export default GarbageBagRolls;
