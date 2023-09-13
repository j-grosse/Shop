import React, { useContext } from 'react';
import { CartContext } from '../App';
import Card from './Card';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../mockData/data';
import Header from './Header';

const ProductDetails = () => {
  const { idParam } = useParams();
  const { cartContent } = useContext(CartContext);
  const navigate = useNavigate();

  const getObjectById = (idParam) => {
    return data.find((item) => item.id === idParam);
  };

  const product = getObjectById(idParam);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
        <Header />
        <div className="text-xl">Product Details</div>
        <div className="flex flex-col mx-auto justify-center gap-4">
          <Card
            id={idParam}
            name={product.name}
            price={product.price}
            weight={product.weight}
            image={product.image}
          />
          Our Mangos come freshly from Spain.
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
