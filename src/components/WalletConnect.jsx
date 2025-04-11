import { useState } from "react";
import { ethers } from "ethers";
import { useGlobalContext } from '../GlobalContext';

const WalletConnect = () => {
      const { address, setAddress } = useGlobalContext();
  

  const connectWallet = async () => {
    
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []); // Request accounts
      
        setAddress(accounts[0]);
        console.log(address)
      } catch (error) {
        console.error("Connection error:", error);
      }
    } else {
      alert("No wallet installed! Please install a wallet like MetaMask to continue.");
    }
  };

  return (
    <div>
      {!address ? (
        <button 
        onClick={connectWallet} 
        className="text-l font-bold m-2 bg-red-50 rounded px-4 py-1 border-2 border-blue-700 bg-white text-blue-700">
            Login
            </button>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default WalletConnect;
