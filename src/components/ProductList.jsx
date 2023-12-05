import React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../App';
import data from '../mockData/data';
import Card from './Card';
import Header from './Header';

// component rendering Header.jsx search field and product cards
const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { totalPieces } = useContext(Context);

  // search functionality
  const searchByName = (name) => {
    const searchResult = data.filter((product) =>
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    searchByName(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchByName(searchTerm);
    setSearchTerm('');
  };

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-white p-5 m-10 shadow-xl">
        {/* header menu */}
        <Header />

        {/* search bar */}
        <div className="text-3xl font-bold mb-4">Fresh Fruits</div>
        <form
          className="m-5 rounded-lg shadow-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            className="px-2 border-4 rounded-lg bg-gray-50 border-green-200 focus:border-yellow-500 focus:outline-none"
            type="text"
            id="input"
            value={searchTerm}
            onChange={handleInputChange}
          />
          {/* 
          <button
            className="border-2 rounded-lg px-2"
            type="submit"
          >
            find products
          </button> 
          */}
        </form>

        {/* fruit cards */}
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
