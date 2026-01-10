import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed z-50 w-full backdrop-blur-2xl py-3 px-4 sm:px-10 xl:px-20">
      <div
        ref={menuRef}
        className="border border-gray-700 rounded-2xl flex justify-between items-center py-3 px-4 sm:px-10 text-lg relative"
      >
        <Link to="/" onClick={() => setOpen(false)}>
          <h1 className="text-3xl font-semibold">ProjectPilot</h1>
        </Link>

        <div className="hidden lg:flex items-center gap-x-6 font-medium">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/https://github.com/Aniket-bit7/ProjectPilot" className="hover:underline">
            About
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform ${
              open ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-transform ${
              open ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {open && (
          <div className="absolute top-full left-0 w-full mt-3 rounded-2xl border border-gray-700 bg-white shadow-lg py-4 flex flex-col items-center gap-4 lg:hidden">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:underline"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
