import React, { useContext } from "react";
import { CartContext } from "../context/GlobalContext";

const truncateTitle = (title, wordsCount) => {
  const words = title.split(' ');
  if (words.length <= wordsCount) {
    return title;
  }
  return words.slice(0, wordsCount).join(' ') + '...';
};

const SingleProduct = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="w-[25%] flex flex-col p-2 m-2 border-slate-400">
      <img
        className="rounded-sm h-[250px] object-contain"
        src={item.image}
        alt={item.name}
      />
      <div className="flex flex-col justify-between p-3">
        <p className="text-xs font-bold mb-1.5">Price: ${item.price}</p>
        <h3 className="font-bold text-gray-600">
          {truncateTitle(item.title, 4)}
        </h3>
      </div>
      {cart.includes(item) ? (
        <button
          onClick={() => setCart(cart.filter((c) => c.id !== item.id))}
          className="p-2 bg-red-500 rounded-lg text-white"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={() => setCart([...cart, item])}
          className="p-2 bg-teal-500 rounded-lg text-white"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default SingleProduct;
