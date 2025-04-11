import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GlobalPrev } from './GlobalContext'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Home from './components/Home'



function App() {

  return (
  <Router> 
   <GlobalPrev>
    <Header />
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  </GlobalPrev>

  </Router>
  )
}

export default App
