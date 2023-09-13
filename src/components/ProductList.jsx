import React from 'react';
import { useState } from 'react';
import data from '../mockData/data';
import Card from './Card';

const ProductList = () => {

  return (
    <div>
      <div>ProductList</div>
      <div className="border-2 rounded-3xl bg-gray-50">
        {data.map((p) => (
          <div key={p.id}> 
          <Card id={p.id} name={p.name} price={p.price} weight={p.weight image={image} } />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
