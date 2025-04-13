import React from 'react';

// this page is for displaying message that user is not logined
const Login = () => {
  return (
    <div className='p-5 bg-gradient-to-r from-blue-900 to-blue-800 w-full h-screen flex justify-center'>
      <div>
        <h1
        className='text-white text-2xl font-bold'
        >Please Login to Continue</h1>
      </div>
    </div>
  )
}

export default Login
