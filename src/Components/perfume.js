import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Perfume = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out",
      once: false, 
      delay: 100,
    });
  }, []);

  return (
    <>
      <div className="min-h-screen h-full bg-[#262626]">
        <div className="grid  gap-8 py-28 max-w-7xl mx-auto p-4">
          <div className="text-center animate-fade-in" data-aos="fade-up">
            <h1 className="lg:text-6xl md:text-3xl text-xl font-bold text-transparent stroke-text opacity-90">
              Perfume
            </h1>
            <h1 className="lg:text-5xl md:text-3xl text-lg font-bold text-white opacity-90">
              Create Your Signature
            </h1>
          </div>
          <div className="flex md:flex-row flex-col animate-fade-in justify-center mx-auto w-full">
            <div className="md:w-1/3 h-[500px]" data-aos="fade-right">
              <img
                src={"sprayBottle.jpg"}
                alt="Spray Bottle"
                className="w-full h-[500px] rounded-tl-[30%]"
              />
            </div>
            <div
              className="bg-[#2F2F30] px-8 py-10 grid md:w-1/3 w-full h-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h1 className="text-white text-3xl font-semibold">
                Our <br /> Product
              </h1>
              <p className="text-gray-300 text-lg font-normal opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea.
              </p>
              <button
                type="button"
                className="text-white border border-white hover:border-[#F2C437] hover:text-[#F2C437] focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-base px-10 text-center w-fit dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
              >
                Learn More
              </button>
            </div>
            <div
              className="relative grid md:w-1/3 w-full h-auto px-8 py-16 rounded-br-[30%] border items-center border-gray-600"
              data-aos="fade-left"
            >
              <div
                className="absolute inset-0 rounded-br-[30%]"
                style={{
                  backgroundImage: `url("cardBgImage.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: 0.5,
                  zIndex: 0,
                }}
              ></div>
              <div className="relative z-10 grid gap-9">
                <h1 className="text-white text-3xl font-semibold">
                  Sunset Lime
                </h1>
                <p className="text-gray-300 text-lg font-normal opacity-90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="grid gap-4">
                  <p className="text-[#F2C437] flex gap-4 items-center">
                    <FaCheckCircle /> sed quia non numquam
                  </p>
                  <p className="text-[#F2C437] flex gap-4 items-center">
                    <FaCheckCircle /> modi tempora incidunt
                  </p>
                  <p className="text-[#F2C437] flex gap-4 items-center">
                    <FaCheckCircle /> nostrum exercitationem
                  </p>
                  <p className="text-[#F2C437] flex gap-4 items-center">
                    <FaCheckCircle /> vel illum qui dolorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfume;
