import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar'

import About from "./pages/About";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-10">
          <Routes>
            <Route path="/" element={<h1 className="text-3xl text-gray-300">Welcome to My Portfolio</h1>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
