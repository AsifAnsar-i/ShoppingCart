import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { CartContext } from "../context/GlobalContext";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [price, setPrice] = useState();
  useEffect(() => {
    setPrice(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);
  return (
    <>
      <h1 className="text-3xl font-semibold p-6 ml-6 sticky top-20 bg-white">
        Total amount : <span className="text-red-500">${Math.floor(price)}</span>
      </h1>
      <div className="flex flex-wrap justify-evenly p-3">
        {cart.length === 0 ? (
          <CartEmpty />
        ) : (
          cart.map((item) => <SingleProduct item={item} key={item.id} />)
        )}
      </div>
    </>
  );
};

export default Cart;
