import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav'
import axios from '../components/utils/axios'
import Cards from './templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const Popular = () => {
   const navigate = useNavigate()
   const [cateGory, setcateGory] = useState("movie")
   const [popular, setPopular] = useState([])
   const [page, setpage] = useState(1)
   const [hasmore, setHasmore] = useState(true)
   document.title = "CELEBFLICKS  | Popular " 


   const getPopular = async()=>{
    try{
      const {data}= await axios.get(`${cateGory}/popular?page=${page}`)
    //   console.log(data)
      // setTrending(data.results)
      // console.log(trending)
      setPopular((prev) => [...prev , ...data.results])
      setpage((page)=> page+1)
    //   console.log(data) 
      // console.log(page) 

    }catch(error){
        console.error(error)
    }
}

 const refreshhandler =  ()=>{
    if (popular.length ===0) {
        getPopular()
    } else {
          setpage(1)
          setPopular([])
          getPopular()
    }
 }

  useEffect(()=>{
    refreshhandler()
},[cateGory]) 


  return popular.length > 0 ? (

    <div className='w-full h-full text-gray-400 container mx-auto py-5 sm:px-0 px-8  '>
        <div className='flex w-full items-center justify-between'>
            <div className='flex w-[80%]  items-center'>
                <Link onClick={()=> navigate(-1)} className=""><i className="ri-arrow-left-line text-2xl mr-2"></i></Link>
                <h1 className='text-lg font-semibold'>Popular</h1>
                <Topnav />      
            </div>
            <div className='sm:flex gap-4 hidden'>
                <select onChange={(e) => setcateGory(e.target.value)} value={cateGory} id="format" name="format" className="select-club-services px-6 py-[6px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-medium rounded-md shadow-lg focus:ring-2 focus:ring-purple-300 focus:outline-none">
                      <option value={"movie"} className="text-gray-700">MOVIE</option>
                      <option value={"tv"} className="text-gray-700">TV</option>
                </select>
                
            </div>
            
        </div>
        <InfiniteScroll
              dataLength={popular.length}
              next={getPopular}
              hasMore={hasmore}
              loader={<Loading />}>
              <Cards data={popular} title={cateGory} />
        </InfiniteScroll>=

    </div>
  ) : <Loading />
}

export default Popular