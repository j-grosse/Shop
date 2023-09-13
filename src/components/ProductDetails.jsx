import React, { useContext } from 'react';
import { CartContext } from '../App';
import Card from './Card';
import { useParams, useNavigate } from 'react-router-dom';
import data from '../mockData/data';
import Header from './Header';

const ProductDetails = () => {
  const { idParam } = useParams();
  const { cartContent, setCartContent, addToCart } = useContext(CartContext);

  const navigate = useNavigate();

  const getObjectById = (idParam) => {
    return data.find((item) => item.id === idParam);
  };

  const product = getObjectById(idParam);
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="mx-auto w-80 h-100 min-h-screen">
      <div className="flex flex-col text-center border-2 rounded-3xl bg-yellow-50 p-5 m-10 shadow-xl">
        <Header />
        <div className="text-4xl">{product.name}</div>
        <div className="flex flex-col mx-auto justify-center gap-4">
          € {product.price} / {product.weight} kg
          <img className="mx-auto w-6/12 m-4" src={product.image} alt="fruit" />
          <div className="flex justify-around mb-2">
            <button
              onClick={() => {
                addToCart(-1);
              }}
              className="text-xl border-2 rounded-lg border-grey bg-white px-2"
            >
              -
            </button>
            <button
              onClick={() => {
                addToCart(+1);
                // addToCart(name, +1);
              }}
              className="text-xl border-2 rounded-lg border-grey bg-white px-2"
            >
              +
            </button>
          </div>
          <p>
            Every {product.name} we sell is fresh and juicy. <br />
            You have our word!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
