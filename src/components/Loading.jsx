import React from 'react'
import loader from "/loader.gif"
const Loading = () => {
  return (
    <div className='w-full h-screen transition duration-1000 delay-1000 items-center justify-center flex bg-black'>
        <img className='' src={loader} alt="" />
    </div>
  )
}

export default Loading