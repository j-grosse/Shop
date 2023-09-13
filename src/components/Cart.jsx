import React from 'react';
import Card from './Card';
import { useParams } from 'react-router-dom';
import data from '../mockData/data';

const Cart = () => {

  return (
    <div className="mx-auto w-80 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
        
        <div>ProductDetails</div>

        {/* <Card
          id={idParam}
          name={product.name}
          price={product.price}
          weight={product.weight}
          image={product.image}
        /> */}
      </div>
    </div>
  );
};

export default Cart;
