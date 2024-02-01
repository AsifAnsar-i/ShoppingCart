import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/GlobalContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-full bg-slate-200 p-3 sm:sticky sm:top-0 sm:self-center sm:mx-auto sm:items-center sm:rounded-sm">
      <div className="flex items-center justify-between p-3 mx-auto">
        {/* Logo */}
        <div className="font-bold text-xl text-black uppercase">
          Shopping Store
        </div>

        {/* Navigation */}
        <ul className="flex justify-end gap-4">
          <li className="font-bold hover:text-teal-400">
            <Link to="/">Home</Link>
          </li>
          <li className="font-bold hover:text-teal-400">
            <Link to="/cart">
              Cart (<span className="text-red-500">{cart.length}</span>)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
