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

  const p = getObjectById(idParam);
  console.log(p);
  
  if (!p) {
    return <div>Product not found</div>;
  }
  
  return (
    <div>
      <div>ProductDetails</div>
      <Card id={idParam} name={p.name} price={p.price} weight={p.weight} />
    </div>
  );
};

export default ProductDetails;
