import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import home_bg from "../assets/home_bg.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidTruck } from "react-icons/bi";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12">
      {/* Hero Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Order Your Favourite <br />{" "}
          <span className="text-yellow-500">Food Easily</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We deliver 100% organic and fresh food. Order now and enjoy!
        </p>

        {/* Navigate to Menu.js when button is clicked */}
        <button
          onClick={() => navigate("/menu")}
          className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full flex items-center gap-2 shadow-lg hover:bg-yellow-500 transition-all"
        >
          Explore Menu
          <AiOutlineArrowRight className="text-lg" />
        </button>
      </div>

      {/* Hero Image */}
      <div className="mt-10 lg:mt-[-10rem]">
        <img
          src={home_bg}
          alt="landing-page-img"
          className="max-w-xs sm:max-w-md lg:max-w-lg"
          loading="lazy"
        />
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <BsBagCheckFill className="text-4xl text-red-500 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Easy Ordering</h3>
          <p className="text-gray-600 text-sm text-center">
            Select your favorite food and place an order effortlessly!
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <IoLocationSharp className="text-4xl text-blue-500 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">
            Choose Location
          </h3>
          <p className="text-gray-600 text-sm text-center">
            Select your receiving location with ease and convenience.
          </p>
        </div>

        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all">
          <BiSolidTruck className="text-4xl text-green-500 mb-3" />
          <h3 className="text-lg font-semibold text-gray-900">Fast Delivery</h3>
          <p className="text-gray-600 text-sm text-center">
            Get your food delivered within 1-2 hours with our fast service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
