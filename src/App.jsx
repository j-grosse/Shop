import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import data from './mockData/data';

export const Context = React.createContext(0);

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPieces, setTotalPieces] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0.0);

  // Function to update the count of a fruit in the cart
  const updateItemCount = (cartItems, id, action) => {
    return cartItems.map((item) => {
      if (item.id === id) {
        let updatedCount = item.count;

        if (action === 'increase') {
          updatedCount++;
        } else if (action === 'decrease') {
          updatedCount--;
        }

        updatedCount = Math.min(updatedCount, 0); // Ensure the count doesn't go below 0

        return {
          ...item,
          count: updatedCount,
        };
      }

      return item;
    });
  };

  // Function to add a new fruit to the cart
  const addFruitToCart = (cartItems, id) => {
    return [...cartItems, { id: id, count: 1 }];
  };

  // Function to calculate the updated total pieces
  const calculateUpdatedTotalPieces = (prevTotalPieces, action) => {
    return prevTotalPieces + (action === 'increase' ? 1 : -1);
  };

  const getPriceById = (id) => {
    const fruit = data.find((fruit) => fruit.id === id);
    return fruit ? fruit.price : undefined;
  };

  const calculateTotalPrice = (cartItems) => {
    let totalPrice = 0;

    for (const item of cartItems) {
      const price = getPriceById(item.id);
      totalPrice += price * item.count;
    }

    return totalPrice;
  };

  // Function to calculate the updated total price
  const calculateUpdatedTotalPrice = (prevTotalPrice, id, action) => {
    const price = getPriceById(id);
    console.log('price', id.price);
    return prevTotalPrice + (action === 'increase' ? price : -price);
  };

  // Updated addToCart function
  const addToCart = (id, action) => {
    setCartItems((prevCartItems) => {
      let updatedCartItems;

      if (action === 'increase') {
        if (prevCartItems.some((item) => item.id === id)) {
          // If the fruit is already in the cart, update its count
          updatedCartItems = updateItemCount(prevCartItems, id, action);
        } else {
          // If the fruit is not in the cart, add it with count 1
          updatedCartItems = addFruitToCart(prevCartItems, id);
        }
      } else if (action === 'decrease') {
        // If the fruit is in the cart, update its count
        updatedCartItems = updateItemCount(prevCartItems, id, action);
      } else {
        // Invalid action, return the previous cart items
        updatedCartItems = prevCartItems;
      }

      const totalPrice = calculateTotalPrice(updatedCartItems);
      setTotalPrice(totalPrice);

      return updatedCartItems;
    });

    setTotalPieces((prevTotalPieces) =>
      calculateUpdatedTotalPieces(prevTotalPieces, action)
    );
    setTotalPrice((prevTotalPrice) =>
      calculateUpdatedTotalPrice(prevTotalPrice, id, action)
    );
  };

  useEffect(() => {
    console.log(
      'cartItems: ',
      cartItems,
      'totalPieces: ',
      totalPieces,
      '\ntotalPrice: ',
      totalPrice
    );
  }, [totalPieces, totalPrice]);

  return (
    <BrowserRouter>
      <Context.Provider
        value={{
          addToCart,
          cartItems,
          totalPieces,
          totalPrice,
        }}
      >
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/:idParam" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
