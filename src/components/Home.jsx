import React from 'react'
import Footerz from "./Footer";
import image from "../assets/image.png";

import Sponsored from './Sponsored';
import RandomNotes from './RandomNotes';
import RecentNotes from './RecentNotes';


const Home = () => {
  return (
 
    <div className="flex flex-col w-full justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700">


    <div className="flex justify-between p-10 max-w-7xl mx-auto">
                <div className="flex w-[50%] items-center justify-center">
                    <div>
                       
                        <h1 className="font-extrabold text-6xl text-gray-50 mx-2 my-5 leading-tight">
                            Learn, Share, Earn – Your Knowledge, Your Rewards!
                        </h1>
                        <h2 className="mx-1 my-5 p-1 text-xl text-gray-300">
                            Study with expert-led courses, share notes with peers, and earn rewards for your contributions. Join now and unlock your Web3 learning journey—60% off for a limited time! 🚀
                        </h2>
                        <button onClick={() => {}} className="bg-blue-700 py-3 px-6 text-white font-bold mx-5 my-2 rounded-lg shadow-lg hover:bg-blue-800 transition-all">
                            EXPLORE
                        </button>
                    </div>
                </div>
                <div className="w-[45%] flex justify-center">
                    <img src={image} alt="Learning" className="w-96 h-auto rounded-xl shadow-lg" />
                </div>
            </div>


    <div className="max-w-7xl mx-auto my-16">
            <RecentNotes />
            </div>

      <div className="max-w-7xl mx-auto my-16">
            <RandomNotes />
            </div>


            <div className="max-w-7xl mx-auto my-16">
<Sponsored/>
</div>

<div className="max-w-7xl mx-auto my-16">
                <h2 className="text-4xl font-bold text-center text-gray-100">What Our Students Say</h2>
                <div className="grid p-5 grid-cols-2 gap-10 mt-10">
                    {[{
                        name: "0x401418iTx8U",
                        feedback: "This platform changed the way I learn. The courses are top-notch!",
                    }, {
                        name: "0x40T41tR41",
                        feedback: "Web3 learning has never been this rewarding. Highly recommended!",
                    }].map((testimonial, index) => (
                        <div key={index} className="p-6 bg-white rounded-xl shadow-lg flex items-center gap-4">
                            <img src={image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-blue-500" />
                            <div>
                                <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
                                <h4 className="text-lg font-semibold text-gray-900 mt-2">- {testimonial.name}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footerz />
      </div>



    
  )
}

export default Home
