/* eslint-disable react/prop-types */
// ProductList.js

import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-8">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
