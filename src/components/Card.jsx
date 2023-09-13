import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';

const Card = ({ id, name, price, weight, image }) => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  console.log(cartContent);

  const handleDetails = () => {
    navigate(`/${id}`);
  };

  return (
    <div className="rounded-3xl bg-red-200 my-3 p-3">
      <ul key={id}>
        <li>{name}</li>
        <li>€ {price}</li>
        <li>{weight} kg</li>
        <li><img src={image} alt="fruit"/></li>
      </ul>
      <button
        onClick={addToCart({name})}
        className="border-2 rounded-lg bg-blue-200 px-2 "
      >
        add to cart
      </button>
      <button
        onClick={handleDetails}
        className="border-2 rounded-lg bg-blue-200 px-2 "
      >
        details
      </button>
    </div>
  );
};

export default Card;
