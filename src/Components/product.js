import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../CartContext/cartContext";

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      delay: 100,
    });
  }, []);

  const { perfumeDetails, handleAddToCart } = useContext(CartContext);

  return (
    <>
      <div className="space-y-10 bg-[#262626] py-28">
        <div className="text-center animate-fade-in" data-aos="fade-up">
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-transparent stroke-text opacity-90">
            Perfume
          </h1>
          <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-white opacity-90">
            Find your Perfume
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 max-w-7xl mx-auto px-4">
          {perfumeDetails.map((product) => (
            <div
              className="bg-[#2F2F30] animate-fade-in justify-center text-center rounded-full py-14 px-10 space-y-6 h-auto w-full"
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={product.id * 100}
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-[60%] mx-auto h-56 object-contain"
              />
              <h1 className="text-white text-2xl lg:text-3xl font-semibold">
                {product.title}
              </h1>
              <p className="text-gray-300 text-sm lg:text-lg font-normal opacity-90">
                {product.description}
              </p>
              <p className="text-gray-300 text-sm lg:text-lg font-normal opacity-90">
                ${product.price}
              </p>
              <button
                type="button"
                className="flex content-center gap-3 justify-self-center mt-4 text-white border border-white hover:border-[#F2C437]  focus:ring-1 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-sm lg:text-base px-6 py-3"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
                <FaCartPlus className="text-2xl hover:text-[#F2C437]" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
