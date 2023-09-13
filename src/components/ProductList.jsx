import React from 'react';
import { useState } from 'react';
import data from '../mockData/data';
import Card from './Card';

const ProductList = () => {
  return (
    <div>
      <div className="flex flex-col text-center border-2 rounded-3xl bg-gray-50 p-5">
        <div>ProductList</div>

        <form action="submit">
          <input className="border-2 rounded-lg bg-gray-50" type="text" />
          <button className="border-2 rounded-lg bg-gray-200 px-2">
            search
          </button>
        </form>

        <div className="flex justify-center gap-4">
          {data.map((product) => (
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
