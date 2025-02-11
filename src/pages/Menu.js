import React, { useState } from "react";
import data from "../Components/Data";
import MenuItemCard from "../Components/MenuItemCard";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = data.filter(
    (item) =>
      selectedCategory === "all" || item.categories.includes(selectedCategory)
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>
      <div className="flex justify-center space-x-4 mb-6">
        {[
          { label: "All Items", value: "all" },
          { label: "Veg Items", value: "veg" },
          { label: "Non-Veg Items", value: "nonveg" },
          { label: "Biryani", value: "biryani" },
        ].map(({ label, value }) => (
          <button
            key={value}
            className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
              selectedCategory === value
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => handleCategoryChange(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.map((item) => (
          <div key={item.id} className="w-full">
            <MenuItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
