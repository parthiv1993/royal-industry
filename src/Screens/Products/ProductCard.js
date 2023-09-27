import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardActionArea } from '@mui/material';
import {
  ProductCardDescription,
  ProductCardImage,
  ProductCardImageContainer,
  ProductCardTitle,
} from './ProductCard.style';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const onProductClick = () => {
    navigate(`/products/${product.link}`, {
      state: { product },
    });
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }} onClick={onProductClick}>
        <CardActionArea>
          <ProductCardImageContainer>
            <ProductCardImage src={product.imageUrl} alt={product.name} />
          </ProductCardImageContainer>
          <CardContent>
            <ProductCardTitle>{product.name}</ProductCardTitle>
            <ProductCardDescription variant='body2' color='text.secondary'>
              {product.description}
            </ProductCardDescription>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ProductCard;
