import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-32 border-b border-gray-300 pb-6 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 mb-6 sm:mb-0">
            <div className="gradient-title1 text-2xl sm:text-3xl font-bold mb-4">
              ProjectPilot
            </div>
            <p className="text-sm sm:text-base text-black leading-relaxed mb-4 max-w-md">
              ProjectPilot – Empowering efficient project management.
            </p>
            <p className="text-sm sm:text-base text-black leading-relaxed max-w-md">
              ProjectPilot is your ultimate task and project management platform designed
              to streamline productivity, track progress visually, and enable
              seamless workflow from planning to completion.
            </p>
          </div>

          {/* Pages */}
          <div className="col-span-1 mb-6 sm:mb-0 sm:ml-2">
            <h4 className="text-lg font-semibold mb-4 gradient-title">Pages</h4>
            <div className="flex flex-wrap text-sm text-gray-600">
              <ul className="w-1/2 space-y-2">
                <li>
                  <Link to="/home" className="hover:text-black flex items-center">
                    <span className="mr-2 gradient-title">›</span>Home
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/Aniket-bit7/EdgeWorks" className="hover:text-black flex items-center">
                    <span className="mr-2 gradient-title">›</span>Github
                  </Link>
                </li>
              </ul>
              <ul className="w-1/2 space-y-2">
                <li>
                  <Link to="/contributers" className="hover:text-black flex items-center">
                    <span className="mr-2 gradient-title">›</span>Contributers
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-black flex items-center">
                    <span className="mr-2 gradient-title">›</span>Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4 gradient-title">Stay Connected</h4>
            <div className="flex flex-wrap items-center gap-4 mb-4 text-black text-xl">
              <a href="#" className="hover:text-[#008080]">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-[#1877F3]">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#0A66C2]">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#FF0000]">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-[#E4405F]">
                <FaInstagram />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-black text-sm mt-2">
              <a href="mailto:support@projectpilot.in" className="flex items-center gap-2 hover:text-black/80">
                <FaEnvelope className="text-base" /> support@projectpilot.in
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-700">
          © 2025 <span className="gradient-title1">ProjectPilot.</span> All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
