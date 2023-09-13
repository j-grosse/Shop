import React from 'react';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';

const Card = ({id, name, price, weight}) => {
    const navigate = useNavigate()

const handleAdd = () => {

}

    const handleDetails = () => {
        navigate(`/${id}`);
      };

  return (
    <div className="rounded-3xl bg-red-200 my-3 p-3">
      <ul key={id}>
        <li>{name}</li>
        <li>€ {price}</li>
        <li>{weight} kg</li>
      </ul>
      <button onClick={handleAdd} className="border-2 rounded-lg bg-blue-200 px-2 ">
        add to cart
      </button>
      <button onClick={handleDetails} className="border-2 rounded-lg bg-blue-200 px-2 ">
        details
      </button>
    </div>
  );
};

export default Card;
