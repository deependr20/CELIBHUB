import React from "react";
import { Link } from "react-router-dom";

const Horizontalcards = ({ data, setcateGory }) => {
  return (
    <div className="w-full px-5 py-3 text-gray-400">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Trending</h1>
        <div className="filters">
          <select onChange={(e) => setcateGory(e.target.value)} defaultValue={0} id="format" name="format" className=" px-12 py-[6px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-medium rounded-md shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none">
            <option value={"all"} className="text-gray-700">ALL</option>
            <option value={"tv"} className="text-gray-700">TV</option>
            <option value={"movie"} className="text-gray-700">MOVIE</option>
          </select>
        </div>
      </div>

      <div className="my-3 flex w-full overflow-y-hidden overflow-x-scroll pb-3 gap-x-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:min-w-[27%]  hover:bg-[#1d1c1c]  sm:min-w-[40%] transition hover:scale-105 delay-75 duration-300 min-w-[80%] cursor-pointer rounded-md">
            <Link to={`/${item.media_type}/details/${item.id}`}>
              <div className="relative overflow-hidden rounded-t">
                <img className="w-full  h-52 object-cover object-top " src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title}
                />
              </div>
            </Link>
            <h2 className="text-lg mt-3 text-gray-200 leading-[1.4rem] font-semibold">
              {item.title || item.original_title || item.original_name}
            </h2>
            <Link
              to={`/${item.media_type}/details/${item.id}`}
              className="text-xs mt-1">
              {item.overview.slice(0, 100)}{" "}
              <span className="text-blue-300 cursor-pointer">...more</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Horizontalcards;

























