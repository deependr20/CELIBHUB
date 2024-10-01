import { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="w-[20%] hidden p-7 h-full lg:flex flex-col border-r-[1px] text-white border-zinc-500">
      <h1 className="text-xl font-bold flex  items-center">
        <i className="ri-tv-fill text-[#6556CD]"></i>
        <span className="ml-2 uppercase text-zinc-200">CelebFlicks</span>
      </h1>

      <nav className="">
        <h1 className="mt-8 mb-3 text-xl font-semibold text-zinc-100">
          New Feeds
        </h1>
        <div className="flex flex-col ">
          <Link
            to={"/trending"}
            className="px-5 py-4  text-md hover:bg-[#6556CD] rounded-md duration-400  hover:text-zinc-200  text-zinc-400 font-semibold">
            <span className="text-white ">
              <i className="ri-fire-line"></i>
            </span>{" "}
            Trending
          </Link>
          <Link
            to={"/popular"}
            className="px-5 rounded-md py-4  text-md hover:bg-[#6556CD]  hover:text-zinc-200  duration-400  text-zinc-400 font-semibold">
            <span className="text-white  mr-1">
              <i className="ri-magic-line"></i>
            </span>{" "}
            Popular
          </Link>
          <Link
            to={"/movie"}
            className="px-5 rounded-md py-4  text-md hover:bg-[#6556CD]  hover:text-zinc-200 duration-400  text-zinc-400 font-semibold">
            <span className="text-white mr-1">
              <i className="ri-movie-line "></i>
            </span>{" "}
            Movies
          </Link>
          <Link
            to={"/tvshows"}
            className="px-5 rounded-md py-4  text-md hover:bg-[#6556CD]  hover:text-zinc-200 duration-400  text-zinc-400 font-semibold">
            <span className="text-white mr-1">
              <i className="ri-tv-2-line"></i>
            </span>{" "}
            TV Shows
          </Link>
          <Link
            to={"/people"}
            className="px-5 rounded-md py-4 mb-3  text-md  hover:bg-[#6556CD]  hover:text-zinc-200 duration-400  text-zinc-400 font-semibold">
            <span className="text-white mr-1">
              <i className="ri-team-line"></i>
            </span>{" "}
            People
          </Link>
          <hr className="bg-grey-100 " />
        </div>
      </nav>

      <nav className="">
        <h1 className="mt-8 mb-5 text-xl font-semibold text-zinc-100">
          Website Information
        </h1>

        <div className="flex flex-col ">
          <Link className="px-5 py-4 mb-2 hover:bg-[#6556CD]  text-md rounded-md duration-400  hover:text-zinc-300  text-zinc-400 font-semibold">
            <span
              className="text-white 
                    ">
              <i className="ri-information-line"></i>
            </span>{" "}
            About CELEBFLICKS
          </Link>
          <Link className="px-5 rounded-md py-4 mb-2 hover:bg-[#6556CD] text-md hover:text-zinc-300  duration-400  text-zinc-400 font-semibold">
            <span className="text-white  mr-1">
              <i className="ri-phone-line"></i>
            </span>{" "}
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidenav;
