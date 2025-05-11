import React from 'react';
import { FaShoppingCart, FaUser, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link to="/" className="hover:text-purple-200">Gadget Heaven</Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-purple-200">Shop</Link>
          <Link to="statistics" className="hover:text-purple-200">Statistics</Link>
          <Link to="/dashboard" className="hover:text-purple-200">Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="hover:text-purple-200"><FaSearch /></button>
          <Link to="/dashboard" className="hover:text-purple-200"><FaShoppingCart /></Link>
          <button className="hover:text-purple-200"><FaUser /></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;