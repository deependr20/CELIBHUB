import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav'
import axios from '../components/utils/axios'
import Cards from './templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
   const navigate = useNavigate()
   const [cateGory, setcateGory] = useState("all")
   const [duration, setDuration] = useState("day")
   const [trending, setTrending] = useState([])
   const [page, setpage] = useState(1)
   const [hasmore, setHasmore] = useState(true)
   document.title = "CELEBFLICKS  | Trneding "
   
   const getTrending = async()=>{
    try{
      const {data} = await axios.get(`/trending/${cateGory}/${duration}?page=${page}`)
      // setTrending(data.results)
      // console.log(trending)
      setTrending((prev) => [...prev , ...data.results])
      setpage((page)=> page+1)
    //   console.log(data) 
      // console.log(page) 

    }catch(error){
        console.error(error)
    }
}

 const refreshhandler = ()=>{
    if (trending.length ===0) {
        getTrending()
    } else {
         setpage(1)
         setTrending([])
         getTrending()
    }
 }

  useEffect(()=>{
    refreshhandler()
},[cateGory,duration]) 

  return trending.length > 0 ? (
    <div className='w-full h-full  text-gray-400 container mx-auto py-5 sm:px-0 px-6  '>
        <div className='md:flex w-full items-center justify-between'>
            <div className='flex sm:w-[80%] w-full items-center '>
                <Link onClick={()=> navigate(-1)} className=""><i className="ri-arrow-left-line text-lg sm:text-2xl mr-2"></i></Link>
                <h1 className='sm:text-lg cursor-pointer text-md font-bold'>Trending</h1>
                <Topnav />      
            </div>
            <div className='flex gap-4  justify-center  md:m-0 mt-5'>
                <select onChange={(e) => setcateGory(e.target.value)} value={cateGory} id="format" name="format" className="select-club-services px-6 py-[6px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-medium rounded-md shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none">
                      <option value={"all"} className="text-gray-700">ALL</option>
                      <option value={"tv"} className="text-gray-700">TV</option>
                      <option value={"movie"} className="text-gray-700">MOVIE</option>
                </select>
                <select onChange={(e) => setcateGory(e.target.value)} defaultValue={0} id="format" name="format" className="select-club-services px-6 py-[6px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-medium rounded-md shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none">
                      <option value={"all"} className="text-gray-700">DAY </option>
                      <option value={"tv"} className="text-gray-700">WEEK</option>
                </select>
            </div>
        </div>

        <InfiniteScroll
            dataLength={trending.length}
            next={getTrending}
            hasMore={hasmore}
            loader={<Loading />}>
            <Cards data={trending} title={cateGory} />
        </InfiniteScroll>
    </div>
  ) : <Loading />
}

export default Trending