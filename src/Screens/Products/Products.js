import products from '../../data/products';
import ProductCard from './ProductCard';
import { ProductPageContainer } from './ProductCard.style';

const Products = () => {
  return (
    <>
      <ProductPageContainer>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ProductPageContainer>
    </>
  );
};

export default Products;
