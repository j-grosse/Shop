import React, { useContext } from 'react';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { PiShoppingCartLight } from 'react-icons/pi';
import { MdArrowBackIos } from 'react-icons/md';

const Header = () => {
  const { cartContent } = useContext(CartContext);
  const navigate = useNavigate();

  const showCart = () => {
    navigate(`/cart`);
  };

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div className="flex justify-between mb-10">
      <button onClick={goBack} className="bg-gray-100 p-1 pt-2 px-4 rounded-lg">
        <MdArrowBackIos />
      </button>
      <button onClick={showCart} className="bg-gray-100 pt-2 px-4 rounded-lg">
        <PiShoppingCartLight />
        {cartContent.sum}
      </button>
    </div>
  );
};

export default Header;
