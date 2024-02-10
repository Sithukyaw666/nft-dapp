import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-center items-center py-4 relative">
      <div className="w-1/5">
        <ul className="flex w-full  justify-between text-white items-center font-medium ">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/creators">Creators</Link>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
