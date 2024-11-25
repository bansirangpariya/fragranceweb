import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TfiQuoteRight } from "react-icons/tfi";
import AOS from "aos";
import "aos/dist/aos.css";

const Feedback = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
  };

  const slider = [
    {
      id: 1,
      img: "client-1.jpg",
      name: "Meylitha",
    },
    {
      id: 2,
      img: "client-2.jpg",
      name: "Jackson",
    },
    {
      id: 3,
      img: "client-3.jpg",
      name: "Jonh Ali",
    },
  ];

  return (
    <div className="relative py-28 bg-[#262626]">
      <div className="bg-[#36363688] backdrop-blur-sm bg-opacity-75">
        <img
          src={"bgflowerImage.jpg"}
          alt="Background"
          className="items-center w-full h-[400px] sm:h-[500px] absolute object-cover"
        />
      </div>
      <div className="">
        <div className="shadow-gray-500/50 px-4 sm:px-16 py-12 sm:py-24 h-auto space-x-0 sm:space-x-14 grid grid-cols-1 sm:grid-cols-2 gap-5 bg-[#363636B8] shadow-2xl backdrop-blur-[1px] sm:bg-opacity-20">
          <div
            className="my-auto animate-fade-in grid justify-items-center sm:justify-items-end"
            data-aos="fade-right"
          >
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-transparent flex items-start stroke-text opacity-50">
              Feedback
            </h1>
            <h1 className="text-lg md:text-3xl lg:text-5xl font-bold text-white opacity-90">
              Our Testimonials
            </h1>
          </div>
          <div className="w-full sm:w-[70%] col-span-1">
            <Slider {...settings} className="slider-container">
              {slider.map((val) => (
                <div
                  className="my-auto animate-fade-in px-6 h-fit"
                  key={val.id}
                  data-aos="fade-up"
                >
                  <div className="space-y-3 bg-[#2F2F30D1] px-9 py-9 rounded-tr-[30%] rounded-bl-[20%]">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, index) => (
                        <svg
                          key={index}
                          className={`w-4 h-4 ${
                            index < 3
                              ? "text-yellow-300"
                              : "text-gray-300 dark:text-gray-500"
                          } ms-1`}
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      ))}
                    </div>
                    <TfiQuoteRight className="text-yellow-300 text-5xl" />
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="flex space-x-3 items-center">
                      <img
                        src={val.img}
                        alt={val.name}
                        className="w-16 h-16 rounded-full" // Adjusted size for responsiveness
                      />
                      <div>
                        <p className="text-white font-extrabold text-lg sm:text-xl">
                          {val.name}
                        </p>
                        <p className="text-white text-sm">Client</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
