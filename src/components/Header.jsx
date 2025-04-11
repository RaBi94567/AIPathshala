import React from 'react'
import { useGlobalContext } from '../GlobalContext';
import { Link, Navigate, useNavigate } from "react-router-dom";
import WalletConnect from './WalletConnect';

export default function Header() {
    const { address, setAddress } = useGlobalContext();
    const navigate = useNavigate();

    return (
        <header className='sticky z-[999] top-0 bg-white flex justify-center max-full'>
            <div className='flex justify-between align-middle px-5 py-2 w-full max-w-[1350px]'>
            <Link to='/'><h1 className='m-2 text-4xl font-bold text-blue-700'>
                AIPathshala 
            </h1></Link>
            {address == '' ? 
            ( <WalletConnect/>)
                     :  (
                     <div
                     className='p-0 my-auto flex'>
                    <Link to='/add'>
                    <p
                    className='font-bold mx-3 text-blue-700 p-2'
                    >Add Note</p>
                    </Link>
                     <button 
                        onClick={() => navigate("/account")} 
                        className="text-l font-bold py-1 bg-blue-700 rounded px-4 border-2 border-blue-700 text-white">
                            My Account
                            </button>
                            </div>
                            )}

                        </div>

       </header>
    )

}


