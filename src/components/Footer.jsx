import React from "react";

export default function Footerz() {
  return (
    <footer className="w-full bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">AIPathshala</h2>
          <p className="text-gray-300 mt-1">
            AI Powered Study Platform, Web3 Based! 
          </p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Services</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
          <a href="#" className="hover:text-gray-300 transition">Privacy</a>
        </div>


      </div>

      <div className="text-center text-gray-400 text-sm mt-6">
        &copy; {new Date().getFullYear()} AIPathshala. All rights reserved.
      </div>
    </footer>
  );
}
