import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import BookCard from './components/BookCard/BookCard'
import Home from './pages/Home/Home'
import Auth from './pages/Auth/Auth'
import Discover from './pages/Discover/Discover';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    {/* <Home/> */}
    <Routes>
      <Route path="/" element={<Home />} />       
      <Route path="/auth" element={<Auth />} />  
      <Route path='/discover' element={<Discover/>}/>
    </Routes>
    </>
  )
}

export default App
