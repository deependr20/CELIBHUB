import React, { useEffect, useState } from "react";
import Sidenav from "./templates/Sidenav";
import Topnav from "./templates/Topnav";
import axios from "../components/utils/axios";
import Header from "./templates/Header";
import Horizontalcards from "./templates/Horizontalcards";
import Loading from "./Loading";

const Home = () => {
  document.title = "CelebFlicks | Homepage";
  const [wallPaper, setwallPaper] = useState(null)
  const [trending, setTrending] = useState(null)
  const [cateGory, setcateGory] = useState("all")
   

  const getHeaderwallPaper = async()=>{
    try{
      const {data}= await axios.get('/trending/all/day')
       const randomWallpaper = data.results[Math.floor(Math.random() * data.results.length)];
       setwallPaper(randomWallpaper);  
      //  console.log(randomWallpaper)
    }catch(error){
      console.error(error)
    }
  }

  const getTrending = async()=>{
    try{
      const {data}= await axios.get(`/trending/${cateGory}/day`)
      setTrending(data.results)
      // console.log(trending)
      
    }catch(error){
      console.error(error)
    }
  }
  // console.log(cateGory)

  useEffect(()=>{
      getTrending()
      !wallPaper &&  getHeaderwallPaper()
  },[cateGory])



  return trending && wallPaper ? (
    <div className="flex w-full h-full ">
        <Sidenav />
        <div className="lg:w-[80%] w-[100%]  min-h-full">
            <Topnav/> 
            <Header data={wallPaper} />
            <Horizontalcards data={trending}  setcateGory = {setcateGory} /> 
        </div>
    </div>
  ) : <Loading/>
};

export default Home;
