import { Typography } from '@mui/material';
import styled from 'styled-components';

export const ProductCardImage = styled.img.attrs({
  height: '100%',
  width: '100%',
})`
  object-fit: contain;
`;

export const ProductCardImageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 360px;
`;

export const ProductPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

export const ProductCardTitle = styled(Typography).attrs({
  variant: 'h5',
  component: 'div',
})``;

export const ProductCardDescription = styled(Typography).attrs({
  variant: 'body2',
  color: 'text.secondary',
  sx: {
    overflow: 'hidden',
    display: '-webkit-box',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
  },
})``;
