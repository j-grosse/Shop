import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import data from './mockData/data';

export const Context = React.createContext(0);

const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  const [cartItems, setCartItems] = useState(data);
  const [totalPieces, setTotalPieces] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);




  // const [cartContent, setCartContent] = useState({
  //   mango: 0,
  //   melon: 0,
  //   peach: 0,
  //   amount: 0,
  //   total: 0.0,
  // });


  // const addToCart = (product) => {
  //   setCartContent((prevCartContent) => ({
  //     ...prevCartContent,

  //     [product]: Math.max(prevCartContent[product] + 1, 0),
  //     amount: Math.max(prevCartContent.amount + 1, 0),

  //     // let total = 0;
  //     // total = sumItems(getItems);

  //   }));
  // };


  // add fruit object from mockData:
  // { id: '1', name: 'mango',  price: 1.0, weight: 0.7, image: 'src/assets/mango.png',}

  const addToCart = (fruit) => {
    const updatedCartItems = [...cartItems]; // get cartItems {id: fruit.id, quantity: 1, price: fruit.price,}

    // find index of fruit in updatedCartItems
    const itemIndex = updatedCartItems.findIndex((item) => item.id === fruit.id);
    console.log('itemIndex', itemIndex, 'itemId: ', fruit.id);

    //  update quantity (if fruit already exists in cart) else add fruit
    if (itemIndex !== -1) {
      updatedCartItems[itemIndex].quantity += 1;
    } else {
      updatedCartItems.push({
        id: fruit.id,
        quantity: 1,
        price: fruit.price,
      });
      console.log("fruit not in cart. Added fruit to cart.");
    }
    setCartItems(updatedCartItems);
    setTotalPieces(totalPieces + 1);
    setTotalPrice(totalPrice + fruit.price);
  };
  

  const updateFruitAmount = (fruitId, amount) => {
    const [fruitAmounts, setFruitAmounts] = useState({});
    setFruitAmounts((prevState) => ({
      ...prevState,
      [fruitId]: amount,
    }));
  };


  const sumItems = (items) => {
    let totalPieces = 0;
    for (const item in items) {
      totalPieces += items[item];
    }
    return totalPieces;
  };

  // const getItems = () => {
  //   // const { mango, melon, peach } = cartContent;
  //   const { amount, total, ...remainingItems } = cartContent;
  //   return remainingItems;
  // };

  useEffect(() => {
    console.log('cartItems: ', cartItems, 'totalPieces: ', totalPieces, '\ntotalPrice: ', totalPrice);
  }, [totalPieces, totalPrice]);
  

  return (
    <BrowserRouter>
      <Context.Provider value={{ totalPieces, setTotalPieces, addToCart }}>
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
