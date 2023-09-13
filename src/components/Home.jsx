import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../App';
import ProductList from './ProductList';

const Home = () => {
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);
  console.log(cartContent);

  return (
    <div>
      <div className="border-2 rounded-3xl bg-white p-5">
        Fruits
        <p></p>
      </div>
    </div>
  );
};

export default Home;
