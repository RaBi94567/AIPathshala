import React from "react";
import { useGlobalContext } from "../GlobalContext";
import Login from "./Login";
import image from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import Footerz from "./Footer";

const Account = () => {
  const { address, setAddress } = useGlobalContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    setAddress("");  // Clear the address (logout)
    navigate("/");  // Redirect to home page
  };

   const tou = () => {
    alert("This is Terms of Use!")
   }

   const pp = () => {
    alert("This is Privacy Policy!")
   }
  // If address is not available, show Login page
  if (address === '') {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-800 to-blue-600">
        <Login />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="bg-white p-8 rounded-xl shadow-xl space-y-6">
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full overflow-hidden shadow-lg">
              <img src={image} alt="User" className="w-full h-full object-cover" />
            </div>
          </div>

    
          <h2 className="text-3xl font-semibold text-center text-gray-800">{address}</h2>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Manage Notes", action: () => navigate("/manage") },
              { label: "My Tokens", action: () => navigate("/my-tokens") },
            ].map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-indigo-500 text-white rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all text-lg font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

        
          <div className="space-y-4">
            <button
              onClick={() => navigate("/chat")}
              className="w-full py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg hover:from-green-500 hover:to-green-400 transition-all text-lg font-medium"
            >
              PathshalaAI
            </button>

            <button
              onClick={() => navigate("/research")}
              className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-lg hover:from-teal-500 hover:to-teal-400 transition-all text-lg font-medium"
            >
              InsightHub
            </button>

            <button
              onClick={() => navigate("/ai-deep-research")}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-500 hover:to-blue-400 transition-all text-lg font-medium"
            >
              DeepDive AI
            </button>



            <button
              onClick={() => navigate("/community")}
              className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-lg hover:from-orange-400 hover:to-orange-300 transition-all text-lg font-medium"
            >
              Community
            </button>

            <button
              onClick={tou}
              className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all text-lg font-medium"
            >
              Terms of Use
            </button>

            <button
              onClick={pp}
              className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-lg hover:from-gray-600 hover:to-gray-500 transition-all text-lg font-medium"
            >
              Privacy Policy
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:from-red-500 hover:to-red-400 transition-all text-lg font-medium mt-6"
          >
            Logout
          </button>
        </div>
      </div>

      <Footerz />
    </div>
  );
};

export default Account;
