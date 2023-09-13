import React from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import data from '../mockData/data';

const ProductDetails = () => {
  const { idParam } = useParams();
  console.log(idParam);

  const getObjectById = (idParam) => {
    return data.find((item) => item.id === idParam);
  };

  const product = getObjectById(idParam);
  console.log(product);
  
  if (!product) {
    return <div>Product not found</div>;
  }
  
  return (
    <div>
      <div>ProductDetails</div>
      
      <Card id={idParam} name={product.name} price={product.price} weight={product.weight} image={product.image}/>
    </div>
  );
};

export default ProductDetails;
