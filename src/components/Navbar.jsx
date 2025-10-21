import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Sgoodies</h1>
        
        {/* Hamburger Button - Only visible on mobile */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>

        {/* Desktop Menu - Hidden on mobile */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-200">Products</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu - Shows when hamburger is clicked */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 mt-4 pb-4">
          <li><Link to="/" className="hover:text-gray-200 block" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-200 block" onClick={() => setIsOpen(false)}>Products</Link></li>
          <li><Link to="/about" className="hover:text-gray-200 block" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200 block" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}