import React from 'react';
import ProductList from './ProductList';

const Home = () => {

  return (
    <div>
      <div className="border-2 rounded-3xl bg-gray-100">
        Home
        <form action="submit">
          <input className="bg-gray-50" type="text" />
          <button className="border-2 rounded-lg bg-gray-200 px-2 ">
            search
          </button>
        </form>
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
