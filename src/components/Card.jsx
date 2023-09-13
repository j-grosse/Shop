import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';

const Card = ({ id, name, price, weight, image }) => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);
  // console.log(cartContent);

  return (
    <div className="flex flex-col justify-center text-center rounded-3xl bg-green-200 my-3 p-3 w-44 shadow-xl">
      <Link to={`/${id}`}>
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
      </Link>

      <div className="flex mb-2">
      </div>
      <div className="flex justify-around mb-2">
        <button
          onClick={() => {
            addToCart(-1);
          }}
          className="text-xl border-2 rounded-lg border-grey bg-white px-2"
        >
          -
        </button>
        <button
          onClick={() => {
            addToCart(+1);
            // addToCart(name, +1);
          }}
          className="text-xl border-2 rounded-lg border-grey bg-white px-2"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
