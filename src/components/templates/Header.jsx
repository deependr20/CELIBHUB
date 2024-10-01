import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // console.log(data)
  return (
    <div
      className="w-full h-[55vh] "
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}>
      <div className="flex justify-end h-full flex-col md:pl-20 pl-12 font-medium text-gray-400">
          <h1 className="font-medium text-slate-300 lg:text-6xl md:text-4xl text-3xl    ">
            {data.original_title || data.name || data.title.slice(0,50)}
          </h1>
          <p className=" font-medium  mt-3 md:w-[60%] w-[80%]  leading-5">
            {data.overview.slice(0, 200)}{" "}
            <Link to={`/${data.media_type}/details/${data.id}`} className="text-blue-300 cursor-pointer">...more</Link >
          </p>
          <div className="flex gap-5 md:mt-3 mt-2">
              <p className=""><i className="ri-volume-down-fill text-yellow-500 mr-1"></i>{data.release_date || "No information"}</p>
              <p className=" uppercase"><i className="ri-memories-line text-yellow-500 mr-1"></i>{data.media_type || "No information"}</p>
          </div>
          <Link className="md:px-5 md:py-2 py-[.35rem] px-3  w-fit md:mt-5 mt-3 md:mb-12 mb-8  bg-gradient-to-r from-purple-600 via-pink-400 to-red-200  font-medium rounded-md shadow-lg  text-gray-200 flex">Watch Trailer</Link>
      </div>
    </div>
  );
};

export default Header;
