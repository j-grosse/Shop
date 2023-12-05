import React, { useContext } from 'react';
import { Context } from '../App';
import { useNavigate, useLocation } from 'react-router-dom';
import { PiShoppingCartLight } from 'react-icons/pi';
import { MdArrowBackIos } from 'react-icons/md';
import { BiHomeAlt2 } from 'react-icons/bi';

const Header = () => {
  const { totalPieces } = useContext(Context);
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
      {/* buttons to go to home and to cart */}
      {location.pathname === '/' && <div></div>}
      {location.pathname !== '/' && (
        <button onClick={goBack} className="p-1 pt-2 px-4 rounded-lg shadow-lg">
          <BiHomeAlt2 />
        </button>
      )}

      <button onClick={showCart} className="pt-2 px-4 rounded-lg shadow-lg">
        <PiShoppingCartLight />
        {totalPieces}
      </button>
    </div>
  );
};

export default Header;
