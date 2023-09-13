import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import Header from './Header';

const Cart = () => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col justify-center mx-auto w-80 min-h-screen shadow-3xl">
        <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
          <Header />
          <div className="text-xl mb-20">Cart</div>
          {Object.entries(cartContent).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
