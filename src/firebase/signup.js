import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { app } from "./config";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  const navigate = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((value) => {
        setShowDialog(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Error Message:", errorMessage);
        setErrorDialog(true);
      });
    localStorage.setItem("data", JSON.stringify(formData));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    navigate("/signin");
  };

  const handleError = () => {
    setErrorDialog(false);
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen px-6 bgImage">
        <div className="border-2 border-gray-400 hover:border-gray-600 w-full max-w-lg p-6 md:p-8 rounded-xl mx-auto">
          <div className="text-center text-3xl font-bold pt-4 pb-8 text-white">
            Signup
          </div>
          <form onSubmit={createUser}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-lg text-white"
              >
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                name="email"
                className="bg-transparent border border-gray-400 hover:border-gray-600 text-white text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label
                htmlFor="password"
                className="block mb-2 font-semibold text-lg text-white"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
                className="bg-transparent border border-gray-400 hover:border-gray-600 text-white text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
                placeholder="Enter your password"
                required
              />
              <div
                className="absolute right-5 top-11 text-2xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <IoEyeSharp className="text-gray-500" />
                ) : (
                  <FaEyeSlash className="text-gray-500" />
                )}
              </div>
            </div>
            {formData.email && formData.password ? (
              <button
                type="submit"
                className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold text-lg rounded-lg w-full px-5 py-2.5 text-center"
              >
                Sign Up
              </button>
            ) : (
              <button
                type="submit"
                className="text-white bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold text-lg rounded-lg w-full px-5 py-2.5 text-center"
                disabled
              >
                Sign Up
              </button>
            )}
          </form>

          {showDialog && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Signup Successful!</h2>
                <button
                  onClick={handleDialogClose}
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  OK
                </button>
              </div>
            </div>
          )}
          {errorDialog && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Invalid Email & Password
                </h2>
                <button
                  onClick={handleError}
                  className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  OK
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
