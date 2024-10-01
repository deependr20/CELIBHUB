import axios from "../utils/axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import noimage from "/noimage.jpg";

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const [visible, setvisible] = useState(false)
  
  // console.log(visible);

  const getSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      //  console.log(data)
      setsearches(data.results);
      //  console.log(searches)
    } catch (error) {
      console.log(error);
    }
    
  };
  useEffect(() => {
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative  flex items-center justify-start md:pl-[15%] pl-[3rem] ">
        {searches ?  <div className={`absolute left-0 z-30 top-5 sm:hidden overflow-hidden bg-white transition-all  duration-500 ${visible ? "w-full" : "w-0"} `}>
            <div className="flex flex-col w-full  text-gray-600 ">
                  <div onClick={()=> setvisible(false)}  className="flex items-center gap-4 p-3 cursor-pointer">
                      <p className="text-lg text-gray-600">Back</p>
                  </div>
                  <NavLink onClick={()=> setvisible(false)} to={"/"}  className={(e)=>e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white": "border pl-6 py-2 "}>HOME</NavLink>
                  <NavLink onClick={()=> setvisible(false)} to={"/trending"} className={(e)=>e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white": "border pl-6 py-2 "}>TRENDING</NavLink>
                  <NavLink onClick={()=> setvisible(false)} to={"/popular"} className={(e)=>e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white": "border pl-6 py-2 "}>POPULAR</NavLink>
                  <NavLink onClick={()=> setvisible(false)} to={"/movie"} className={(e)=>e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white": "border pl-6 py-2 "}>MOVIE</NavLink>
                  <NavLink onClick={()=> setvisible(false)} to={"/tvshows"} className={(e)=>e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white": "border pl-6 py-2 "}>TV SHOWS</NavLink>
                  <NavLink onClick={()=> setvisible(false)} to={"/person"} className={(e)=>e.isActive ? "border pl-6 py-2 sm:bg-none bg-black sm:text-black text-white": "border pl-6 py-2 "}>PEOPLE</NavLink>
              </div>
      </div>  : null

        }
        <div onClick={()=> setvisible(prev => !prev)} className="absolute cursor-pointer text-2xl flex sm:hidden right-1 text-white top-4">
           <i className="ri-menu-line"></i>
        </div>
        
      
        <i className="ri-search-line text-2xl text-zinc-400"></i>
        <input
          className="md:w-[50%] w-full  text-md  font-semibold px-8 text-zinc-300 outline-none border-none   bg-transparent "
          type="text"
          placeholder="search anythinhg"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="ri-close-line text-2xl absolute left-[80%] md:left-[65%]  text-zinc-400"></i>
        )}
      <div className="bg-zinc-200 absolute md:w-[80%] lg:w-[%] sm:w-[90%] w-[80%]   ml-5 rounded top-[100%] max-h-[60vh] overflow-auto">
        {searches.map((item, index) => (
          <Link
            key={index}
            className="flex p-8 border-b-2 font-semibold gap-6 items-start text-sm hover:bg-zinc-300 border-slate-100">
            <img
              src={
                item.backdrop_path || item.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path || item.profile_path
                    }`
                  : noimage
              }
              className="w-20 shadow object-center  h-20 rounded  object-cover"
              alt=""
            />
            <span className="mt-3">
              {item.original_title || item.name || item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
