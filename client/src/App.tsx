import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from './components/Navbar'

import About from "./pages/About";
import ProjectsArt from "./pages/ProjectsArt";
import ProjectsProgramming from "./pages/ProjectsProgramming";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-10 max-w-7xl">
          <Routes>
            <Route path="/" element={<h1 className="text-3xl text-gray-300 text-center">Welcome to My Portfolio</h1>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects/art" element={<ProjectsArt />} />
            <Route path="/projects/programming" element={<ProjectsProgramming />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
