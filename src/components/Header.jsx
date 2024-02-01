import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/GlobalContext";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="w-[1440px] sticky top-0 bg-slate-200 self-center mx-auto items-center p-3 rounded-md">
      <div className="flex items-center justify-between p-3 mx-auto">
        {/* Logo */}
        <div className="font-bold text-2xl text-black uppercase ">shopping Store</div>

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
