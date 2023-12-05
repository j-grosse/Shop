import React from 'react';
import { useContext } from 'react';
import { Context } from '../App';
import { Link } from 'react-router-dom';

const Card = ({ id, name, price, weight, image }) => {
  // use addToCart from App.js for card buttons
  const { addToCart } = useContext(Context);

  return (
    <div className="flex flex-col justify-center text-center rounded-3xl bg-green-200 my-3 p-3 w-44 shadow-xl">
      {/* Link to the product details page, if clicked on the fruit image and data */}
      <Link to={`/${id}`}>
        {/* Display the fruit data */}
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

      {/* Buttons to add or remove the fruit from the cart */}
      <div className="flex mb-2"></div>
      <div className="flex justify-around mb-2">
        <button
          onClick={() => {
            addToCart(id, 'decrease');
          }}
          className="text-xl border-2 rounded-lg border-grey bg-white px-2 shadow-lg"
        >
          -
        </button>
        <button
          onClick={() => {
            addToCart(id, 'increase');
          }}
          className="text-xl border-2 rounded-lg border-grey bg-white px-2 shadow-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Card;
