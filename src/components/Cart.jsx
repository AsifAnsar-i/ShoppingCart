import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../context/GlobalContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);
  return (
    <>
      <h1 className="text-3xl font-semibold p-6 ml-6">
        Total amount : <span className="text-red-500">${price}</span>
      </h1>
      <div className="flex flex-wrap justify-evenly p-3">
        {cart.map((item) => (
          <SingleProduct item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Cart;
