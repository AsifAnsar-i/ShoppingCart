// CartEmpty.js
import React from 'react';

const CartEmpty = () => {
  return (
    <div className="cart-empty-container p-8 border border-gray-300 rounded-md text-center">
      <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
      <p className="text-gray-600 mt-2">Add items to your cart to continue shopping.</p>
    </div>
  );
};

export default CartEmpty;
