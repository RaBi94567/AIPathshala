import React, { useState } from 'react';
import image from '../assets/deepresearch.png';

const AIDeepResearch = () => {


  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white flex flex-col justify-center items-center">
   
      <div className="w-full max-w-7xl text-center p-8">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
        DeepDive AI
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Get ready to explore deep insights and knowledge!
        </p>
      </div>

      <div className="w-full max-w-7xl p-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-semibold text-xl">Step 1</h3>
            <p className="text-center text-gray-200 mt-2">
              Use AI chat to gather relevant keywords and phrases for your research.
            </p>
          </div>
         
          <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-teal-600 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="font-semibold text-xl">Step 2</h3>
            <p className="text-center text-gray-200 mt-2">
              Dive into historical data, research papers, news articles, innovations, and more available across the internet.
            </p>
          </div>
        
          <div className="flex flex-col items-center bg-gradient-to-r from-pink-500 to-red-600 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="font-semibold text-xl">Step 3</h3>
            <p className="text-center text-gray-200 mt-2">
              Use our advanced in-built tools to gather, analyze, and cross-check data effectively.
            </p>
          </div>
         
          <div className="flex flex-col items-center bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg shadow-lg p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="font-semibold text-xl">Step 4</h3>
            <p className="text-center text-gray-200 mt-2">
              Collect, analyze, and process all gathered data, then finalize the results.
            </p>
          </div>
        </div>
      </div>

    
      <div className="w-full max-w-7xl p-8 bg-gradient-to-r from-purple-900 to-indigo-800 rounded-lg shadow-lg mt-12">
        <h2 className="text-3xl mb-5 font-semibold text-center text-white">Example of Output</h2>
      
      <div
      className='w-full m-auto flex justify-center'
      >
      <img src={image}/>
        </div>
        </div>


   
      <div className="mt-12 w-full max-w-7xl p-6 bg-gradient-to-r from-pink-600 to-yellow-600 rounded-lg shadow-lg text-center">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-300">
          PREMIUM FEATURE!
        </h2>
        <p className="mt-4 text-lg text-gray-100">
          AI Deep Research is premium feature. Please upgrade your account to pro to continue!
        </p>
        <button
          className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white text-xl rounded-md hover:bg-gradient-to-l transition duration-300"
        >
          Get Premium
        </button>
      </div>
    </div>
  );
};

export default AIDeepResearch;
