import React, { useContext } from "react";
import { CartContext } from "../context/GlobalContext";

const SingleProduct = ({ item }) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="w-[25%] flex flex-col p-2 m-2 border-slate-400">
      <img
        className="rounded-sm"
        src={item.images[1] }
        alt={item.name}
      />
      <div className="flex justify-between p-3">
        <h3>{item.title}</h3>
        <p className="text-sm font-semibold">Price: ${item.price}</p>
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
