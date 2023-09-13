import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Mango from './assets/mango.png';
import Melon from './assets/melon.png';
import Peach from './assets/peach.png';

export const CartContext = React.createContext();

const App = () => {
  const [cartContent, setCartContent] = useState(null);

  const addToCart = (product, amount) => {
    setCartContent((prevContent) => ({
      ...prevContent,
      [product]: amount,
    }));
  };

  return (
    <BrowserRouter>
      <CartContext.Provider value={{ cartContent, setCartContent, addToCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:idParam" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};

export default App;
