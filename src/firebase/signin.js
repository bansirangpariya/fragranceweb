import React, { useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router";

const Signin = () => {
  let formData1 = localStorage.getItem("data") || "[]";
  formData1 = JSON.parse(formData1);

  const auth = getAuth();
  const user = auth.currentUser;
  const [formData, setFormData] = useState({
    email: formData1?.email,
    password: formData1?.password,
  });
  const [currentUser, setCurrentUser] = useState(null);
  const [showPassword, setShowPassword] = useState();
  const [showDialog, setShowDialog] = useState(false);
  const [errorDialog, setErrorDialog] = useState(false);
  console.log(user, "userserserser");

  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((val) => {
        const user = val.user;
        localStorage.setItem(
          "data",
          JSON.stringify({ email: formData.email, password: formData.password })
        );
        setShowDialog(true);
        navigate("/home");
        localStorage.removeItem("data", {
          email: formData.email,
          password: formData.password,
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error("Error Message:", errorMessage);
        setErrorDialog(true);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setFormData({ ...formData, [name]: value });
    setFormData({ formData });
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    navigate("/");
  };

  const handleError = () => {
    setErrorDialog(false);
    navigate("/signin");
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);
  return (
    <>
      <div className="flex justify-center items-center min-h-screen p-4 bgImage">
        <div className="border-2 border-gray-400 hover:border-gray-600 w-full max-w-md p-6 md:p-8 rounded-xl mx-auto">
          <div className="text-center text-3xl font-bold pt-4 pb-8 text-white">
            SignIn
          </div>
          <form onSubmit={signInUser}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 font-semibold text-lg text-white"
              >
                Enter Your email
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
                Enter Your password
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
            <button
              type="submit"
              className="text-white bg-gray-500 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold text-lg rounded-lg w-full px-5 py-2.5 text-center"
            >
              Sign In
            </button>
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

export default Signin;
