import React from 'react'
import Header from './components/Header'
import { GlobalPrev } from './GlobalContext'
import Home from './components/Home'
import Details from './components/Details'
import Chat from './components/Chat'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddForm from './components/AddForm'
import Account from './components/Account'
import Community from './components/Community'
import { Toaster, toast } from 'react-hot-toast';
import BrowserInterface from './components/BrowserInterface'
import AIDeepResearch from './components/AIDeepResearch'
import ManageNotes from './components/ManageNotes'



function App() {

  return (
  <Router> 
   <GlobalPrev>
    <Header />
    <Toaster position="top-center" />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/chat" element={<Chat />} />
    <Route path="/details" element={<Details />} />
    <Route path="/add" element={<AddForm />} />
    <Route path="/account" element={<Account />} />
    <Route path="/community" element={<Community />} />
    <Route path="/research" element={<BrowserInterface />} />
    <Route path="/ai-deep-research" element={<AIDeepResearch />} />
    <Route path="/manage" element={<ManageNotes />} />
    </Routes>
  </GlobalPrev>

  </Router>
  )
}

export default App
