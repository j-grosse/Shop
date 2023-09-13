import React, { useContext } from 'react';
import { CartContext } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import { PiShoppingCartLight } from 'react-icons/pi';
import { MdArrowBackIos } from 'react-icons/md';
import { BiHomeAlt2 } from 'react-icons/bi';

const Header = () => {
  const { cartContent } = useContext(CartContext);
  const navigate = useNavigate();
  const location = useLocation();

  const showCart = () => {
    navigate(`/cart`);
  };

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div className="flex justify-between mb-10">
      <button
        onClick={goBack}
        className="p-1 pt-2 px-4 rounded-lg shadow-lg"
      >
        {location.pathname !== '/' ? <MdArrowBackIos /> : <BiHomeAlt2 />}
      </button>
      <button
        onClick={showCart}
        className="pt-2 px-4 rounded-lg shadow-lg"
      >
        <PiShoppingCartLight />
        {cartContent.amount}
      </button>
    </div>
  );
};

export default Header;
