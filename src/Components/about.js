import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const [activeState, setActiveState] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
      delay: 100,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(activeState));
  }, [activeState]);

  const activeFunction = () => {
    setActiveState(true);
  };

  return (
    <>
      <div className="relative py-36 bg-[#262626]">
        <img
          src={"bgFragranceImage.jpg"}
          alt="Fragrance Background"
          className="items-center w-full h-[600px] absolute object-cover"
          data-aos="fade-zoom-in"
          data-aos-duration="2000"
        />

        <div
          className="shadow-gray-500/50 px-16 py-24 h-[600px] animate-fade-in grid gap-5 sm:w-1/2 sm:ml-auto bg-[#363636B8] shadow-2xl backdrop-blur-lg sm:mx-0 ml-4 mr-4 bg-opacity-20 sm:mr-0"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1
            className="lg:text-7xl md:text-3xl text-xl font-bold text-transparent stroke-text opacity-90"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            About us
          </h1>
          <h1
            className="lg:text-6xl md:text-3xl text-lg font-bold text-white opacity-90"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="600"
          >
            The New Fresh Sensation
          </h1>
          <p
            className="text-gray-300 text-lg font-normal opacity-90"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>

          <button
            type="button"
            className="text-white border border-white hover:border-[#F2C437] hover:text-[#F2C437] focus:ring-4 focus:outline-none focus:ring-gray-300 font-semibold rounded-full text-base px-10 py-5 text-center w-fit dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            data-aos="zoom-in"
            data-aos-duration="1200"
            data-aos-delay="1000"
            onClick={activeFunction}
          >
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
