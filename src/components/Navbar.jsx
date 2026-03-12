import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  User,
  LayoutDashboard,
  LogOut,
  Settings,
  Menu,
  X,
  Book
} from "lucide-react";

function Navbar() {

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <header className="w-full bg-white border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          DevSetu
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          <Link to="/explore">Explore</Link>
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">

          {!user ? (
            <>
              <Link to="/login">Sign in</Link>

              <Link
                to="/signup"
                className="border border-black px-4 py-2 rounded-md hover:bg-black hover:text-white"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>

              {/* Profile Button */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center"
              >
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : <User size={18} />}
              </button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white border rounded-lg shadow-lg py-2">

                  <div className="px-4 py-2 text-sm text-gray-500 border-b">
                    {user?.name}
                  </div>

                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                  >
                    <User size={18} />
                    Profile
                  </Link>

                  <Link
                    to="/repos"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                  >
                    <Book size={18} />
                    Repositories
                  </Link>

                  <Link
                    to="/dashboard"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                  >
                    <LayoutDashboard size={18} />
                    Dashboard
                  </Link>

                  <Link
                    to="/settings"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                  >
                    <Settings size={18} />
                    Settings
                  </Link>

                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 px-4 py-2 hover:bg-red-50 text-red-500"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </div>
              )}

            </div>
          )}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-8 py-6 flex flex-col gap-5">

          <Link to="/explore">Explore</Link>

          {!user ? (
            <>
              <Link to="/login">Sign in</Link>
              <Link to="/signup">Sign up</Link>
            </>
          ) : (
            <>
              <Link to="/profile">Profile</Link>
              <Link to="/repos">Repositories</Link>

              <button
                onClick={logout}
                className="text-red-500 text-left"
              >
                Logout
              </button>
            </>
          )}

        </div>
      )}

    </header>
  );
}

export default Navbar;