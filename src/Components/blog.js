import React, { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const blog = [
    {
      id: 1,
      img: "blog1.jpg",
      date: "December 16, 2022",
      title: "The essence of Happy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 2,
      img: "blog2.jpg",
      date: "December 16, 2022",
      title: "Men’s favorite perfume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      id: 3,
      img: "blog3.jpg",
      date: "December 15, 2022",
      title: "Benefits of using perfume",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
  ];

  return (
    <>
      <div className="bg-[#262626] p-28">
        <div className="text-center animate-fade-in">
          <h1 className="lg:text-8xl md:text-3xl text-xl font-bold text-transparent stroke-text opacity-90">
            Blog
          </h1>
          <h1 className="text-xl md:text-3xl lg:text-6xl font-bold text-white opacity-90">
            Blog & Article
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 py-28 max-w-7xl mx-auto px-4">
          {blog.map((val) => {
            return (
              <div
                key={val.id}
                className="max-w-sm col-span-1 animate-fade-in bg-[#262626] shadow dark:bg-gray-800 dark:border-gray-700"
                data-aos="fade-up"
              >
                <p className="hover:rotate-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000">
                  <img className="" src={val.img} alt="" />
                </p>
                <div className="pt-5 w-[80%]">
                  <h5 className="mb-2 text-lg font-normal flex items-center gap-3 tracking-tight text-[#F2C437] dark:text-white">
                    <CalendarTodayIcon className="text-[#F2C437]" /> {val.date}
                  </h5>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    {val.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-300 dark:text-gray-400">
                    {val.description}
                  </p>
                  <p className="inline-flex items-center text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <button
                      type="button"
                      className="text-white border border-white flex items-center gap-2 hover:border-[#F2C437] hover:text-[#F2C437] focus:ring-4 focus:outline-none focus:ring-gray-300 font-normal rounded-full text-base px-7 py-3 text-center w-fit dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                    >
                      Learn More <FaLongArrowAltRight />
                    </button>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
