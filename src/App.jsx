import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

export const CartContext = React.createContext();

const App = () => {
  const [cartContent, setCartContent] = useState({
    mango: 0,
    melon: 0,
    peach: 0,
    sum: 0,
  });

  const addToCart = (name, amount) => {
    const prevAmount = cartContent[name];
    console.log('fruit added')

    prevAmount &&
      setCartContent((prevContent) => {
        if (prevAmount !== 0) {
          return {
            ...prevContent,
            [name]: prevAmount + amount,
          };
        } else {
          return prevContent;
        }
      });
  };

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartContent, setCartContent, addToCart }}>
      <Home />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:idParam" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
