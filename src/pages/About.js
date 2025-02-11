import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import foodnapkin from "../assets/foodnapkin.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const About = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Query submitted successfully! ✅");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-white to-yellow-300 py-16 px-6">
      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:space-x-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={foodnapkin}
            alt="About Us"
            className="w-full max-w-md mx-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-5xl font-bold text-gray-900 leading-tight">
            We Serve the Best <br /> Quality Food
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Located in Bangalore, we source ingredients locally to ensure
            freshness and quality. Experience the best dining ambiance with
            delicious meals crafted just for you.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            Sign up or log in to explore our exclusive menu and order your
            favorite dishes.
          </p>

          {/* Explore Menu Button */}
          <button
            onClick={() => navigate("/menu")}
            className="mt-6 flex items-center justify-center px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Explore Menu <AiOutlineArrowRight className="ml-2 text-xl" />
          </button>
        </div>
      </div>

      {/* Query Form Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-lg p-8">
        <h3 className="text-4xl font-bold text-gray-900 text-center mb-6">
          Have a Question? Ask Us!
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition-all"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition-all"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              required
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm transition-all"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-600 transition-transform transform hover:scale-105"
          >
            Submit Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default About;
