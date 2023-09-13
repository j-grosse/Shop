import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import data from '../mockData/data';
import { PiShoppingCartLight } from 'react-icons/pi';

const Cart = () => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const showCart = () => {
    navigate(`/cart`);
  };

  const goBack = () => {
    navigate(`/`);
  };
  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col justify-center mx-auto w-80 min-h-screen shadow-3xl">
        <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
          <div className="flex justify-between mb-10">
            <button onClick={goBack} className="border-2 p-1 rounded-lg">
              back
            </button>
            <button
              onClick={showCart}
              className="border-2 pt-2 px-4 rounded-lg"
            >
              <PiShoppingCartLight />
              {cartContent.sum}
            </button>
          </div>

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
