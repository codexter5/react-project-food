import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar({ user, cartCount, logout }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  const menuLinks = (
    <>
      <Link
        to="/"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-yellow-400 transition font-semibold"
        onClick={() => setMobileOpen(false)}
      >
        Menu
      </Link>
      <Link
        to="/about"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-yellow-400 transition font-semibold"
        onClick={() => setMobileOpen(false)}
      >
        About
      </Link>
      {user?.username === 'admin' && (
        <Link
          to="/add"
          className="block md:inline-block px-3 py-2 rounded-md hover:text-yellow-400 transition font-semibold"
          onClick={() => setMobileOpen(false)}
        >
          Add Item
        </Link>
      )}
      <Link
        to="/cart"
        className="block md:inline-block px-3 py-2 rounded-md hover:text-yellow-400 transition font-semibold"
        onClick={() => setMobileOpen(false)}
      >
        Cart ({cartCount})
      </Link>
    </>
  );

  return (
    <nav className="fixed top-0 w-full bg-red-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-extrabold">
              🍔 <span className="text-yellow-400">Food App</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {menuLinks}

            {!user ? (
              <Link
                to="/login"
                className="bg-yellow-400 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Login / Sign Up
              </Link>
            ) : (
              <div className="flex items-center space-x-3">
                <span className="font-semibold">Hi, {user.username}</span>
                <button
                  onClick={logout}
                  className="bg-yellow-400 text-red-600 px-3 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none text-2xl"
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {mobileOpen && (
        <div className="md:hidden bg-red-600 text-white px-4 pt-2 pb-4 space-y-1">
          {menuLinks}
          {!user ? (
            <Link
              to="/login"
              className="block bg-yellow-400 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              onClick={() => setMobileOpen(false)}
            >
              Login / Sign Up
            </Link>
          ) : (
            <div className="flex flex-col space-y-2 mt-2">
              <span className="font-semibold">Hi, {user.username}</span>
              <button
                onClick={() => { logout(); setMobileOpen(false); }}
                className="bg-yellow-400 text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
