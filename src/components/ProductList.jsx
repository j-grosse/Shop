import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';
import data from '../mockData/data';
import Card from './Card';
import { PiShoppingCartLight } from 'react-icons/pi';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cartContent } = useContext(CartContext);
  const navigate = useNavigate();

  const searchByName = (name) => {
    const searchResult = data.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
    console.log(searchResult);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    searchByName(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchByName(searchTerm);
    setSearchTerm('');
  };

  const showCart = () => {
    navigate(`/cart`);
  };

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
        <div className="flex justify-between mb-10">
          <button onClick={goBack} className="border-2 p-1 rounded-lg">
            back
          </button>
          <button onClick={showCart} className="border-2 pt-2 px-4 rounded-lg">
            <PiShoppingCartLight />
            {cartContent.sum}
          </button>
        </div>
        <div className="text-xl">Fruits and Berries</div>
        <form className="m-5" onSubmit={handleSubmit}>
          <input
            className="border-2 rounded-lg bg-gray-50"
            type="text"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {/* <button
            className="border-2 rounded-lg px-2"
            type="submit"
          >
            find
          </button> */}
        </form>
        <div className="flex flex-col mx-auto justify-center gap-4">
          {data
            .filter((product) =>
              product.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((product) => (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                weight={product.weight}
                image={product.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
