import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("customer");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    navigate("/menu");
  }

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-6">
      <div className="flex bg-gray-100 p-2 rounded-full mb-6">
        <button
          className={`w-1/2 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
            accountType === "customer"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
          onClick={() => setAccountType("customer")}
        >
          Customer
        </button>
        <button
          className={`w-1/2 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
            accountType === "seller"
              ? "bg-blue-600 text-white"
              : "text-gray-600"
          }`}
          onClick={() => setAccountType("seller")}
        >
          Seller
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <p className="text-gray-700 font-medium">First Name</p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
          </label>
          <label className="block">
            <p className="text-gray-700 font-medium">Last Name</p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
          </label>
        </div>

        <label className="block mt-4">
          <p className="text-gray-700 font-medium">Email Address</p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
          />
        </label>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <label className="block relative">
            <p className="text-gray-700 font-medium">Create Password</p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
            <span
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </label>
          <label className="block relative">
            <p className="text-gray-700 font-medium">Confirm Password</p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg"
            />
            <span
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg mt-6 hover:bg-blue-700 transition-all duration-300">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
