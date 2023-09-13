import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import { useParams } from 'react-router-dom';
import Card from './Card';
import data from '../mockData/data';

const Cart = () => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);

  return (
    <div className="mx-auto w-80 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
        <div>Cart</div>
        {Object.entries(cartContent).map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}

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
