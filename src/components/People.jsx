import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from './templates/Topnav'
import axios from '../components/utils/axios'
import Cards from './templates/Cards'
import Loading from './Loading'
import InfiniteScroll from 'react-infinite-scroll-component';

const People = () => {
   const navigate = useNavigate()
   const [cateGory, setcateGory] = useState("popular")
   const [people, setPeople] = useState([])
   const [page, setpage] = useState(1)
   const [hasmore, setHasmore] = useState(true)
   document.title = "CELEBFLICKS | PEOPLE "

   const getPeople = async()=>{
    try{
      const { data } = await axios.get(`/person/${cateGory}?page=${page}`);
      // setTrending(data.results)
      // console.log(data)
      // console.log(trending)
      setPeople((prev) => [...prev , ...data.results])
      setpage((page)=> page+1)
      console.log(people) 
      // console.log(page) 

    }catch(error){
        console.error(error)
    }
}

 const refreshhandler = ()=>{
    if (people.length ===0) {
      getPeople()
    } else {
          setpage(1)
          setPeople([])
          getPeople()
    }
 }

  useEffect(()=>{
    refreshhandler()
},[cateGory]) 


  return people.length > 0 ? (

    <div className='w-full h-full text-gray-400 container mx-auto py-5 sm:px-0 px-6  '>
        <div className='md:flex w-full items-center justify-between'>
            <div className='flex sm:w-[80%] w-full items-center '>
                <Link onClick={()=> navigate(-1)} className=""><i className="ri-arrow-left-line text-lg sm:text-2xl mr-2"></i></Link>
                <h1 className='sm:text-lg text-md cursor-pointer font-bold'>people</h1>
                <Topnav />    
            </div>
        </div>

        <InfiniteScroll
              dataLength={people.length}
              next={getPeople}
              hasMore={hasmore}
              loader={<Loading />}
              >
              <Cards data={people} title="people" />
        </InfiniteScroll>=
    </div>
  ) : <Loading />
}

export default People  