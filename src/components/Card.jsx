import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, price, weight, image }) => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);

  const navigate = useNavigate();
  console.log(cartContent);

  const showDetails = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="flex flex-col justify-center text-center rounded-3xl bg-rose-100 my-3 p-3 w-44 shadow-xl">
      <ul key={id}>
        <li>
          <b>{name}</b>
        </li>
        <li>€ {price}</li>
        <li>{weight} kg</li>
        <li>
          <img className="mx-auto w-6/12 m-4" src={image} alt="fruit" />
        </li>
      </ul>
      <div className="flex">
        <button
          onClick={() => {
            addToCart(+1);
            // addToCart(name, +1);
          }}
          className="text-xs border-2 rounded-lg border-grey bg-white px-2 w-20"
        >
          add
        </button>
        <button
          onClick={() => {
            addToCart(-1);
          }}
          className="text-xs border-2 rounded-lg border-grey bg-white px-2 w-20"
        >
          remove
        </button>
        <button
          onClick={showDetails}
          className="text-xs border-2 rounded-lg border-grey bg-white px-2 w-20"
        >
          details
        </button>
      </div>
    </div>
  );
};

export default Card;
