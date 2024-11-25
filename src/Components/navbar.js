import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "../firebase/config";
import { FaCartPlus } from "react-icons/fa";

const auth = getAuth(app);
const Navbar = () => {
  const navigate = useNavigate();
  // const [showDialog, setShowDialog] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = window.location.pathname;

  const activeFunction = () => {
    navigate("/about");
    navigate("/home");
    navigate("/perfume");
    navigate("/feedback");
    navigate("/product");
    navigate("/blog");
    navigate("/cart");
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user, "------------user");
      } else {
        setUser(null);
        console.log("you are logged out");
      }
    });
  }, []);

  return (
    <>
      <header className="w-screen fixed top-0 bg-gray-500 bg-opacity-10 backdrop-blur-xl z-50 px-6 lg:px-0 border-b-4 border-yellow-500">
        <div className="flex w-full mx-auto py-4 justify-between h-[84px] items-center lg:max-w-[1280px]">
          <div className="flex gap-2 w-fit items-center">
            <img
              src={"logo-fitform_2.png"}
              alt="Neuron Logo"
              className="w-auto h-[60px]"
              onClick={() => navigate("/signin")}
            />
          </div>
          {user && (
            <div className="hidden md:flex space-x-12">
              <Link
                to="/home"
                className={`text-lg font-bold ${
                  pathName === "/home" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-lg font-bold ${
                  pathName === "/about" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                AboutUs
              </Link>
              <Link
                to="/perfume"
                className={`text-lg font-bold ${
                  pathName === "/perfume" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                Perfume
              </Link>
              <Link
                to="/product"
                className={`text-lg font-bold ${
                  pathName === "/product" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                Product
              </Link>
              <Link
                to="/feedback"
                className={`text-lg font-bold ${
                  pathName === "/feedback" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                Feedback
              </Link>
              <Link
                to="/blog"
                className={`text-lg font-bold ${
                  pathName === "/blog" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                Blog
              </Link>
              <Link
                to="/cart"
                className={`text-lg font-bold ${
                  pathName === "/cart" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={activeFunction}
              >
                <FaCartPlus className="text-2xl hover:text-[#F2C437]" />
              </Link>
            </div>
          )}

          <div className="hidden md:flex space-x-2">
            {user === null ? (
              <>
                <button
                  className="bg-gray-500 text-white hover:bg-white hover:text-gray-500 px-6 py-2 rounded-full font-medium text-sm"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <Link to="/" onClick={() => navigate("/")}>
                    Sign Up
                  </Link>
                </button>
                <button
                  className="bg-white border-2 border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500 px-6 py-2 rounded-full font-medium text-sm"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <Link to="/signin" onClick={() => navigate("/signin")}>
                    Sign In
                  </Link>
                </button>
              </>
            ) : (
              <button
                className="bg-white border-2 border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500 px-6 py-2 rounded-full font-medium text-sm"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                <Link
                  to="/signin"
                  onClick={async () => {
                    await signOut(auth);
                    navigate("/signin");
                  }}
                >
                  Logout
                </Link>
              </button>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <IoMdMenu className=" w-12 h-12" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden w-full bg-[#363636B8]  bg-opacity-90 backdrop-blur-lg absolute top-[84px] left-0">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link
                  to="/home"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  AboutUs
                </Link>
              </li>
              <li>
                <Link
                  to="/perfume"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  Perfume
                </Link>
              </li>
              <li>
                <Link
                  to="/feedback"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  onClick={() => setMenuOpen(false)}
                  className="text-white font-medium text-lg"
                >
                  <FaCartPlus className="text-2xl hover:text-[#F2C437]" />
                </Link>
              </li>
              <li>
                <button
                  className="bg-gray-500 text-white hover:bg-white hover:text-gray-500 px-6 py-2 rounded-full font-medium text-sm"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <Link to="/" onClick={() => navigate("/")}>
                    Sign Up
                  </Link>
                </button>
              </li>
              <li>
                <button
                  className="bg-white border-2 border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500 px-6 py-2 rounded-full font-medium text-sm"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <Link to="/signin" onClick={() => navigate("/signin")}>
                    Sign In
                  </Link>
                </button>
              </li>
              <li>
                <button
                  className="bg-white border-2 border-gray-500 hover:bg-gray-500 hover:text-white text-gray-500 px-6 py-2 rounded-full font-medium text-sm"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  <Link
                    to="/signin"
                    onClick={() => {
                      navigate("/signin");
                      signOut(auth);
                    }}
                  >
                    Logout
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
