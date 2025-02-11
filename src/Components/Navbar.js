import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div className="w-full bg-white mb-2 shadow-md border-b border-gray-300">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] mt-7 mx-auto">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo-img"
            width={180}
            height={32}
            loading="lazy"
          />
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex gap-x-8 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="relative px-4 py-2 border border-transparent rounded-md hover:border-blue-500 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative px-4 py-2 border border-transparent rounded-md hover:border-blue-500 transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="relative px-4 py-2 border border-transparent rounded-md hover:border-blue-500 transition duration-300"
              >
                Menu
              </Link>
            </li>
          </ul>
        </nav>

        {/* Authentication Buttons */}
        <div className="flex items-center gap-x-4">
          {!isLoggedIn && (
            <Link to="/login">
              <button className="py-2 px-4 rounded-md border border-blue-500 text-blue-500 font-semibold transition duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg">
                Login
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="py-2 px-4 rounded-md border border-blue-500 text-blue-500 font-semibold transition duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="py-2 px-4 rounded-md border border-red-500 text-red-500 font-semibold transition duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg"
              >
                Log Out
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="py-2 px-4 rounded-md border border-blue-500 text-blue-500 font-semibold transition duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
