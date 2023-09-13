import React from 'react';
import { useState } from 'react';
import data from '../mockData/data';
import Card from './Card';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
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

  return (
    <div>
      <div className="flex flex-col text-center border-2 rounded-3xl bg-gray-50 p-5">
        <div className='text-3xl'>Product List</div>
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
        <div className="flex justify-center gap-4">
          {data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product) => (
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
