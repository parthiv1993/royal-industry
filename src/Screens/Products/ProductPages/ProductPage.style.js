import styled from 'styled-components';
import { Typography, Grid } from '@mui/material';

export const Image = styled.img.attrs({
  width: '100%',
  height: 'auto',
})``;

export const ImageContainer = styled(Grid).attrs({
  md: 5,
  lg: 5,
  xs: 12,
  sm: 12,
})`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductTitle = styled(Typography).attrs({
  variant: 'h3',
  component: 'h2',
})``;

export const ProductDetailContainer = styled(Grid).attrs({
  md: 7,
  lg: 7,
  xs: 12,
  sm: 12,
})`
  padding: 16px;
`;

export const ProductDescription = styled(Typography).attrs({
  variant: 'subtitle2',
  component: 'p',
})``;
