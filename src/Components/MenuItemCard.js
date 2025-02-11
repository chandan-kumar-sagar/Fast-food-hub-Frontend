import React, { useState } from "react";

const MenuItemCard = ({ item }) => {
  const [readmore, setReadmore] = useState(false);
  const truncatedInfo = readmore
    ? item.info
    : `${item.info.substring(0, 50)}...`;

  function readmoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="w-full px-3 py-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
        <img
          className="w-full h-48 object-cover rounded-t-2xl"
          src={item.image}
          alt={item.name}
        />

        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h2>
          <p className="text-sm text-gray-600 leading-snug mb-3">
            {truncatedInfo}{" "}
            <span
              className="text-blue-500 font-semibold cursor-pointer hover:text-blue-700 transition duration-300"
              onClick={readmoreHandler}
            >
              {readmore ? "Show less" : "Read more"}
            </span>
          </p>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
              {item.category}
            </span>
            <button className="px-5 py-2 rounded-full bg-yellow-400 text-white font-semibold shadow-md hover:bg-yellow-500 transition-all">
              ₹{item.price}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
