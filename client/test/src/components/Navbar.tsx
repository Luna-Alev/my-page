// @ts-ignore
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
    <div className="max-w-8xl mx-auto flex items-center justify-between">
      <div className="text-xl font-bold">
        <Link to="/">MyLogo</Link>
      </div>
      <div className="space-x-6 flex items-center">
        <Link to="/about" className="hover:text-gray-400">About</Link>

        <div className="relative group">
          <button className="hover:text-gray-400 focus:outline-none">Projects</button>
          <div className="absolute left-0 bg-gray-800 mt-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-150 z-50">
            <Link to="/projects/art" className="block px-4 py-2 hover:bg-gray-700">Art</Link>
            <Link to="/projects/programming" className="block px-4 py-2 hover:bg-gray-700">Programming</Link>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-gray-400 focus:outline-none">Shop</button>
          <div className="absolute left-0 bg-gray-800 mt-2 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-150 z-50">
            <Link to="/shop/originals" className="block px-4 py-2 hover:bg-gray-700">Originals</Link>
            <Link to="/shop/prints" className="block px-4 py-2 hover:bg-gray-700">Prints</Link>
            <Link to="/shop/other" className="block px-4 py-2 hover:bg-gray-700">Other</Link>
          </div>
        </div>

        <Link to="/contact" className="hover:text-gray-400">Contact Me</Link>
      </div>
    </div>
  </nav>
  );
}
