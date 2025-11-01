import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed z-50 w-full backdrop-blur-2xl py-3 px-4 sm:px-10 xl:px-20">
      <div className="border border-gray-700 rounded-2xl flex justify-between items-center py-3 px-4 sm:px-10 text-lg">
        <Link to="/">
          <h1 className="text-3xl font-semibold">ProjectPilot</h1>
        </Link>

        <div className="flex justify-center gap-6 items-center">
          <div className="hidden lg:flex items-center gap-x-6 font-medium">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
