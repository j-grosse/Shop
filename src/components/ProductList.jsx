import React from 'react';
import data from '../mockData/data';

const ProductList = () => {
  return (
    <>
      <div>ProductList</div>
      <div className="border-2 rounded-3xl bg-gray-50">
        {data.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </>
  );
};

export default ProductList;
