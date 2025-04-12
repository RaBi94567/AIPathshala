import React from "react";
import Footerz from "./Footer";

export default function Community() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 py-10">
      <div className="max-w-7xl w-full px-4 space-y-10">

  
        <section className="bg-white/10  rounded-2xl p-8 shadow-lg text-white">
          <h1 className="text-4xl font-bold mb-4">Master Web Development & Community Learning</h1>
          <p className="text-gray-300 mb-6">
            Welcome to the ultimate hub for developers, learners, and tech enthusiasts! Explore, learn, and grow together with industry experts and fellow coders. 
            Share your knowledge, clear your doubts, and stay updated with trending topics and latest technologies.
          </p>
          <div className="flex justify-between text-sm text-gray-400">
            <span>Topic: Full Stack & Modern Web Tech</span>
            <span>Last Updated: April 4, 2025</span>
          </div>
        </section>

        <section className="bg-white/10  rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">Recent Unanswered Questions</h2>
          <ul className="space-y-4">
            <li className="border-b border-white/20 pb-2">Best way to manage global state in React?</li>
            <li className="border-b border-white/20 pb-2">Laravel vs Django for API development?</li>
            <li className="border-b border-white/20 pb-2">What are Web 3.0 technologies?</li>
            <li className="border-b border-white/20 pb-2">SEO optimization tips for Next.js apps?</li>
          </ul>
          <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition">
            + Contribute Answer
          </button>
        </section>

   
        <section className="bg-white/10  rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["React & Frontend", "Python & Django", "SEO & Marketing", "DevOps & Deployment", "Machine Learning", "Freelancing & Career"].map((category, index) => (
              <div key={index} className="bg-blue-700/30 p-4 rounded-xl hover:scale-105 transition">
                <h3 className="font-bold">{category}</h3>
              </div>
            ))}
          </div>
        </section>

    
        <section className="bg-white/10  rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">Top Contributors of the Month</h2>
          <div className="grid md:grid-cols-4 gap-4 text-center">
            {["0x401418vtT5", "0x401418iTx8U", "0x40T41tR41", "0x401T418d4"].map((name, index) => (
              <div key={index} className="bg-blue-700/30 p-4 rounded-xl hover:scale-105 transition">
                <p className="text-xl font-bold">{name}</p>
                <p className="text-gray-400 text-sm">120+ Answers</p>
              </div>
            ))}
          </div>
        </section>

      
        <section className="bg-white/10  rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">Trending Discussions</h2>
          <ul className="space-y-3 text-blue-300">
            <li className="hover:underline cursor-pointer">Is AI replacing developers?</li>
            <li className="hover:underline cursor-pointer">Best hosting for beginners?</li>
            <li className="hover:underline cursor-pointer">Why should you learn TypeScript?</li>
            <li className="hover:underline cursor-pointer">Latest trends in Mobile App Development</li>
          </ul>
        </section>

        <section className="bg-white/10  rounded-2xl p-8 shadow-lg text-white">
          <h2 className="text-2xl font-semibold mb-4">Explore Similar Communities</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {["Tech Coders", "AI Forum", "Web Creators Hub", "SEO Club", "Designers Lounge", "Python Experts"].map((community, index) => (
              <div key={index} className="bg-blue-700/30 p-4 rounded-xl hover:scale-105 transition">
                <h3 className="font-bold">{community}</h3>
              </div>
            ))}
          </div>
        </section>
        <Footerz/>
      </div>
    </div>
  );
}
