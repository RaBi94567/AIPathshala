import React from 'react'
import Footerz from "./Footer";
import Sponsored from './Sponsored';


const Home = () => {
  return (
    <>
    <div className="flex flex-col h-screen  w-full justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700">

      This is homepage

      <Sponsored/>

      </div>
      <Footerz />

      </>
  )
}

export default Home
