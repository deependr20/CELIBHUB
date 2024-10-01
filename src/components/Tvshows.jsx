import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav'
import axios from '../components/utils/axios'
import Cards from './templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Tvshows = () => {
   const navigate = useNavigate()
   const [cateGory, setcateGory] = useState("airing_today")
   const [tvshows, setTvshows] = useState([])
   const [page, setpage] = useState(1)
   const [hasmore, setHasmore] = useState(true)
   document.title = "CELEBFLICKS | Tv shows "

   const getTvshows = async()=>{
    try{
      const { data } = await axios.get(`/tv/${cateGory}?page=${page}`);
      // setTrending(data.results)
      // console.log(trending)
      setTvshows((prev) => [...prev , ...data.results])
      setpage((page)=> page+1)
      console.log(data) 
      // console.log(page) 

    }catch(error){
        console.error(error)
    }
}

 const refreshhandler = ()=>{
    if (tvshows.length ===0) {
        getTvshows()
    } else {
          setpage(1)
          setTvshows([])
          getTvshows()
    }
 }

  useEffect(()=>{
    refreshhandler()
},[cateGory]) 


  return tvshows.length > 0 ? (

    <div className='w-full h-full text-gray-400 container mx-auto py-5 sm:px-0 px-6  '>
        <div className='md:flex w-full items-center  justify-between'>
            <div className='flex sm:w-[80%] w-full   items-center '>
                <Link onClick={()=> navigate(-1)} className=""><i className="ri-arrow-left-line text-lg sm:text-2xl mr-2"></i></Link>
                <h1 className='sm:text-lg text-md cursor-pointer font-bold'>Movie</h1>
                <Topnav />      
            </div>
            <div className='flex gap-4  justify-center  md:m-0 mt-5'>
                <select onChange={(e) => setcateGory(e.target.value)} value={cateGory}  className="select-club-services px-6 py-[6px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-medium rounded-md shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none">
                      <option value={"popular"} className="text-gray-700">POPULAR</option>
                      <option value={"top_rated"} className="text-gray-700">Top RATED</option>
                      <option value={"on_the_air"} className="text-gray-700 uppercase">ON THE AIR</option>
                      <option value={"airing_today"} className="text-gray-700 uppercase">AIRING TODAY</option>
                </select>
               
            </div>
            
        </div>
        <InfiniteScroll
              dataLength={tvshows.length}
              next={getTvshows}
              hasMore={hasmore}
              loader={<Loading />}
              >
              <Cards data={tvshows} title ="tv" />
        </InfiniteScroll>=

    </div>
  ) : <Loading />
}

export default Tvshows