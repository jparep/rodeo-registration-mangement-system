import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Rodeo Registration System
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/contestants" className="text-gray-300 hover:text-white">Contestants</Link>
          <Link to="/events" className="text-gray-300 hover:text-white">Events</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
