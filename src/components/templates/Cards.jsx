import React from "react";
import { Link, useParams } from "react-router-dom";
import noimage from "/noimage.jpg";

const Cards = ({ data, title }) => {
  // console.log(title)
  // console.log(data)
  return (
    <div className="grid grid-cols-2 w-full   h-full relative rounded sm:grid-cols-3 lg:grid-cols-5 gap-x-12 mt-12 gap-y-28 ">
      {data.map((item, index) => (
        <Link
          to={`/${item.media_type || title}/details/${item.id}`}
          key={index}
          className="">
          <div  className="w-full h-full hover:scale-[1.08]  delay-100   duration-200 ">
            <div className="text-yellow-400 font-semibold  absolute text-xs m-1 px-2 py-1 bg-black ">
              <p>{item.vote_average ? "Rating" : "Popular"}</p>
              {item.vote_average ? (
                <p>{item.vote_average.toFixed(1)}</p>
              ) : (
                <p>{Math.floor(item.popularity)}</p>
              )}
            </div>
            <img
              className=" aspect-square h-full   overflow-hidden rounded-t  object-cover object-center"
              src={
                item.poster_path || item.backdrop_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/w300${
                      item.poster_path ||
                      item.backdrop_path ||
                      item.profile_path
                    }`
                  : noimage
              }
              alt={item.title}
            />
          </div>
          <h1 className="text-2xl text-gray-300  leading-7 mt-3  font-semibold">
            {item.original_title || item.name || item.title}
          </h1>
          {/* <p className='text-sm mt-2'>
              {item.overview ? (item.overview.length > 90 ? item.overview.substring(0, 90) + '...' : item.overview) : 'No description available'}
            </p> */}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
