import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import Header from './Header';
import CuteFruits from '../assets/cute-fruits.png'
const Cart = () => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col justify-center mx-auto w-80 min-h-screen shadow-3xl">
        <div className="flex flex-col text-center border-2 rounded-3xl bg-yellow-50 p-5 m-10 shadow-xl">
          <Header />
          <div className="text-3xl font-bold mb-4">Cart</div>
          {Object.entries(cartContent).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
          <img className="mt-16" src={CuteFruits} alt="cute fruits" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
