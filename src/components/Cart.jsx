import React, { useContext, useEffect } from 'react';
import { Context } from '../App';
import Header from './Header';
import CuteFruits from '../assets/cute-fruits.png';
import data from '../mockData/data';

const Cart = () => {
  const { cartItems, totalPieces, totalPrice } = useContext(Context);

  console.log(cartItems);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  // cartItems.map((key, value) => (<p key={key}>
  // {key}: {value}</p>))

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col justify-center mx-auto w-80 min-h-screen shadow-3xl">
        <div className="flex flex-col text-center border-2 rounded-3xl bg-yellow-50 p-5 m-10 shadow-xl">
          {/* header menu */}
          <Header />

          <div className="text-3xl font-bold mb-4">Cart</div>
          {/* Object.entries converts the object into an array of key-value pairs */}
          {/* {totalPieces && Object.entries(totalPieces).map(([key, value]) => ( */}
          {cartItems && console.log(cartItems[0])}
          <div>

            {cartItems &&
              cartItems.map((item, index) => (
                <div key={index}>
                  <span>
                    {data[index].name}: {item.count} pcs.
                  </span>
                </div>
              ))}
              <p>total: {totalPieces} pcs.</p>
              <p>total: €{totalPrice}</p>
          </div>
          <img className="mt-16" src={CuteFruits} alt="cute fruits" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
