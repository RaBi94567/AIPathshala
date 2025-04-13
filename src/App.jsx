import React from 'react';
import Home from './components/Home';
import Chat from './components/Chat';
import Header from './components/Header';
import Details from './components/Details';
import AddForm from './components/AddForm';
import Account from './components/Account';
import { GlobalPrev } from './GlobalContext';
import MyTokens from './components/MyTokens';
import Community from './components/Community';
import { Toaster, toast } from 'react-hot-toast';
import ManageNotes from './components/ManageNotes';
import BrowserInterface from './components/BrowserInterface';
import AIDeepResearch from './components/AIDeepResearch';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Route path="/my-tokens" element={<MyTokens />} />
    </Routes>
  </GlobalPrev>
  </Router>
  )
}

export default App
