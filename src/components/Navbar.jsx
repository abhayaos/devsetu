import React, { useState, useEffect, useRef } from "react";
import {
  User,
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

  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Explore",
      path: "/explore"
    }
  ];

  const userItems = [
    {
      name: "Profile",
      path: "/profile",
      icon: <User size={18} />
    },
    {
      name: "SetuLabs",
      path: "/setu-labs",
      icon: <Book size={18} />
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={18} />
    }
  ];

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

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
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold text-gray-900 hover:text-black transition"
        >
          DevSetu
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="hover:text-black transition"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-6">

          {!user ? (
            <>
              <a
                href="/login"
                className="text-gray-600 hover:text-black transition"
              >
                Sign in
              </a>

              <a
                href="/signup"
                className="border border-gray-300 px-4 py-2 rounded-md hover:bg-black hover:text-white transition"
              >
                Sign up
              </a>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>

              {/* Profile Button */}
              <button
                onClick={() => setDropdown(!dropdown)}
                className="w-9 h-9 cursor-pointer rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
              >
                {user?.name
                  ? user.name.charAt(0).toUpperCase()
                  : <User size={18} />}
              </button>

              {/* Dropdown */}
              {dropdown && (
                <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2">

                  <div className="px-4 py-2 text-sm text-gray-500 border-b">
                    {user?.name}
                  </div>

                  {userItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.path}
                      className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  ))}

                  <button
                    onClick={logout}
                    className="flex w-full items-center gap-3 px-4 py-2 text-red-500 hover:bg-red-50 transition"
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
          className="md:hidden text-gray-700"
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 px-8 py-6 flex flex-col gap-4 bg-white">

          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.path}
              className="text-gray-700 hover:text-black"
            >
              {item.name}
            </a>
          ))}

          {!user ? (
            <>
              <a href="/login">Sign in</a>
              <a href="/signup">Sign up</a>
            </>
          ) : (
            <>
              {userItems.map((item, index) => (
                <a key={index} href={item.path}>
                  {item.name}
                </a>
              ))}

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