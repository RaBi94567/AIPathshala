import React from "react";
import { useGlobalContext } from "../GlobalContext";
import Login from "./Login";
import Footerz from "./Footer";

const MyTokens = () => {
  const { address } = useGlobalContext();
  const balance = 0;
  const adSpend = 0;

  if (!address) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-800 to-blue-600">
        <Login />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">🎟️ My Tokens Dashboard</h1>

        {/* Wallet Info */}
        <div className="bg-blue-900 bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-8 space-y-4">
          <div className="bg-white bg-opacity-20 px-3 py-2 rounded-md inline-block">
            <p className="text-sm font-semibold text-black drop-shadow">Wallet Address:</p>
          </div>
          <p className="text-md break-all">{address}</p>

          <div className="bg-white bg-opacity-20 px-3 py-2 rounded-md inline-block">
            <p className="text-sm font-semibold text-black drop-shadow">Token Balance:</p>
          </div>
          <p className="text-2xl font-bold text-yellow-300">{balance} 🪙</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg shadow">
            Buy Coin
          </button>
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold py-2 px-4 rounded-lg shadow">
            Sell Coin
          </button>
          <button className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-2 px-4 rounded-lg shadow">
            Earning History
          </button>
        </div>

        {/* How to Buy Tokens */}
        <div className="bg-blue-900 bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6">
          <div className="bg-white bg-opacity-20 px-3 py-2 rounded-md inline-block mb-2">
            <h2 className="text-xl font-semibold text-black drop-shadow">🛒 How to Buy Tokens</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Click on the <strong>Buy Coin</strong> button above to purchase tokens using your wallet.
            Payments are secure and tokens are credited instantly.
          </p>
        </div>

        {/* How to Run Ads */}
        <div className="bg-blue-900 bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6">
          <div className="bg-white bg-opacity-20 px-3 py-2 rounded-md inline-block mb-2">
            <h2 className="text-xl font-semibold text-black drop-shadow">📢 How to Run Ads</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Navigate to the <strong>Ads</strong> section in your dashboard. Use your tokens to create ad campaigns,
            target specific users, and track performance in real-time.
          </p>
        </div>

        {/* Ad Spend Summary */}
        <div className="bg-blue-900 bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6">
          <div className="bg-white bg-opacity-20 px-3 py-2 rounded-md inline-block mb-2">
            <h2 className="text-xl font-semibold text-black drop-shadow">💸 Ad Spend Summary</h2>
          </div>
          <p className="text-sm">
            Total Ad Spend: <span className="font-bold text-red-300">{adSpend} 🪙</span>
          </p>
          <p className="text-sm text-gray-200 mt-1">
            You haven’t used any tokens for ads yet. Start promoting today!
          </p>
        </div>

        {/* Token Utility */}
        <div className="bg-blue-900 bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-12">
          <div className="bg-white bg-opacity-20 px-3 py-2 rounded-md inline-block mb-2">
            <h2 className="text-xl font-semibold text-black drop-shadow">ℹ️ Token Utility & Benefits</h2>
          </div>
          <ul className="list-disc list-inside text-sm leading-relaxed">
            <li>Use tokens to run ads and boost your visibility</li>
            <li>Earn tokens via referrals and completing tasks</li>
            <li>Withdraw or exchange tokens easily</li>
            <li>Get access to exclusive member campaigns</li>
          </ul>
        </div>
      </div>

      <Footerz />
    </div>
  );
};

export default MyTokens;
