import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalPrev } from './GlobalContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'
import Account from './components/Account'
import AddForm from './components/AddForm'
import Details from './components/Details'
import { Toaster, toast } from 'react-hot-toast';



function App() {

  return (
  <Router> 
   <GlobalPrev>
    <Header />
    <Toaster position="top-center" />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/account" element={<Account/>} />
    <Route path="/add" element={<AddForm />} />
    <Route path="/details" element={<Details />} />
    </Routes>
  </GlobalPrev>

  </Router>
  )
}

export default App
