import React, { useState, useContext } from 'react';
import { CartContext } from '../App';
import Card from './Card';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../mockData/data';
import { PiShoppingCartLight } from 'react-icons/pi';

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

  const showCart = () => {
    navigate(`/cart`);
  };

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
        <div className="flex justify-between mb-10">
          <button onClick={goBack} className="border-2 p-1 rounded-lg">
            back
          </button>
          <button onClick={showCart} className="border-2 pt-2 px-4 rounded-lg">
            <PiShoppingCartLight />
            {cartContent.sum}
          </button>
        </div>
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
