import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="min-h-screen h-full bg-[#262626]">
        <div className="h-full min-h-screen flex justify-center relative  items-center px-6">
          <div className="grid w-full max-w-7xl  absolute opacity-20 grid-cols-1 sm:grid-cols-3 gap-6 ">
            <div
              className="mt-[140px] md:mt-[100px] px-4 h-[420px] rounded-tl-3xl rounded-br-3xl justify-start hidden lg:flex"
              data-aos="fade-right"
            >
              <img
                src={"fragrance1.avif"}
                alt="Fragrance 1"
                className="w-80 h-[400px] animate-fade-in border p-3 border-yellow-200 rounded-tr-[30%] rounded-bl-[30%] "
              />
            </div>
            <div className="flex justify-center" data-aos="zoom-in">
              <img
                src={"fragrance2.avif"}
                alt="Fragrance 2"
                className="w-72 sm:w-80 animate-fade-in h-[400px] sm:h-[500px] mt-[30px] rounded-full"
              />
            </div>
            <div
              className="h-[420px] justify-end  hidden lg:flex"
              data-aos="fade-left"
            >
              <img
                src={"fragrance3.avif"}
                alt="Fragrance 3"
                className="w-80 h-[400px] animate-fade-in rounded-tl-[30%] rounded-br-[30%] border border-yellow-200 p-3"
              />
            </div>
          </div>
          <div className="grid gap-5 absolute -mt-[200px]">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white">
              Find a Signature <br /> Scent you Love
            </h1>
            <div className="flex items-center gap-10">
              <button
                type="button"
                className="text-white border border-white hover:border-[#F2C437] hover:text-[#F2C437] focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-base px-10 py-5 text-center w-fit dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="1000"
              >
                Learn More
              </button>
              <span class="relative flex">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F2C437] "></span>
                <span class="relative inline-flex rounded-full p-6  bg-[#F2C437]">
                  {" "}
                  <FaPlay className="" />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-5 justify-items-center -mt-20 pb-10 px-4">
          <div
            className="w-full sm:w-[80%] lg:w-[60%]  animate-fade-in flex flex-col col-span-7 lg:col-span-3 text-center lg:text-left gap-7"
            data-aos="fade-up"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent stroke-text opacity-40">
              Featured
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              The Perfection
            </h1>
            <p className="text-gray-300 text-base sm:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div
            className="col-span-7 lg:col-span-2 border animate-fade-in border-gray-600 rounded-tr-[30%] rounded-bl-[30%] rounded-3xl p-4"
            data-aos="zoom-in"
          >
            <div className="w-full max-w-sm mx-auto  shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-6 px-6 gap-4">
                <img src={"brandlogo1.png"} alt="Brand Logo" className="w-20" />
                <h1 className="text-white text-2xl sm:text-3xl font-bold">
                  Top Brand
                </h1>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <div className="flex mt-4 md:mt-6">
                  <p className="flex items-center gap-2 text-yellow-500">
                    Learn More <FaLongArrowAltRight />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-span-7 lg:col-span-2 border animate-fade-in border-yellow-500 rounded-3xl p-4"
            data-aos="zoom-in"
          >
            <div className="w-full max-w-sm mx-auto shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center py-6 px-6 gap-4">
                <img
                  src={"customer-support.png"}
                  alt="Customer Support"
                  className="h-16 w-16"
                />
                <h1 className="text-white text-2xl sm:text-3xl font-bold">
                  24/7 Support
                </h1>
                <p className="text-gray-300 text-sm sm:text-base text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing.
                </p>
                <div className="flex mt-4 md:mt-6">
                  <p className="flex items-center gap-2 text-yellow-500">
                    Learn More <FaLongArrowAltRight />
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

export default Home;
