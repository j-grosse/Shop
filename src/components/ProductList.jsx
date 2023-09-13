import React from 'react';
import { useState, useContext } from 'react';
import { CartContext } from '../App';
import data from '../mockData/data';
import Card from './Card';
import Header from './Header';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cartContent } = useContext(CartContext);

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
      <div className="flex flex-col text-center border-2 rounded-3xl bg-yellow-50 p-5 m-10 shadow-xl">
        <Header />
        <div className="text-3xl font-bold mb-4">Fresh Fruits</div>
        <form className="m-5 rounded-lg shadow-lg" onSubmit={handleSubmit}>
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
