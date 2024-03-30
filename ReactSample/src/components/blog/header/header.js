import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <div className="mx-auto flex justify-between items-center">
        <div className="logo">
          <NavLink to="/" className="text-xl font-bold">
            My Blog
          </NavLink>
        </div>
        <nav>
          <ul className="flex">
            <li className="mx-4">
              <NavLink to="/" className="hover:text-gray-300">
                Home
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/about" className="hover:text-gray-300">
                About
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/services" className="hover:text-gray-300">
                Services
              </NavLink>
            </li>
            <li className="mx-4">
              <NavLink to="/contact" className="hover:text-gray-300">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
