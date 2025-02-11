import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In Successfully");
    navigate("/menu");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-6 mt-6 p-6 bg-white shadow-lg rounded-lg"
    >
      <label className="w-full">
        <p className="text-gray-700 font-medium mb-2">
          Email Address <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email"
          name="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </label>

      <label className="w-full relative">
        <p className="text-gray-700 font-medium mb-2">
          Password <sup className="text-red-500">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          name="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <span
          className="absolute right-4 top-12 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible size={24} className="text-gray-500" />
          ) : (
            <AiOutlineEye size={24} className="text-gray-500" />
          )}
        </span>
      </label>

      <div className="flex justify-between items-center text-sm">
        <Link to="#" className="text-blue-500 hover:underline">
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
