import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';

export const CartContext = React.createContext();

const App = () => {
  const [cartContent, setCartContent] = useState({
    mango: 0,
    melon: 0,
    peach: 0,
    Cart: 0,
  });

  const addToCart = (amount) => {
    setCartContent((prevCartContent) => ({
      ...prevCartContent,
      Cart: Math.max(prevCartContent.sum + amount, 0),
    }));
  };

  // const addToCart = (name, amount) => {
  //   const prevAmount = cartContent[name];
  //   console.log('fruit added');
  //   console.log(cartContent.sum);
  //   prevAmount &&
  //     setCartContent((prevContent) => {
  //       console.log(prevContent);

  //       if (prevAmount !== 0) {
  //         return {
  //           ...prevContent,
  //           [name]: prevAmount + amount,
  //         };
  //       } else {
  //         return prevContent;
  //       }
  //     });
  // };

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartContent, setCartContent, addToCart }}>
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
