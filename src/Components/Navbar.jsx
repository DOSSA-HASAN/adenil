import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "AboutUs", to: "/about" },
    { name: "Programs", to: "/programs" },
    { name: "Get Involved", to: "/get-involved" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fcfbf8]/95 backdrop-blur-lg border-b border-[#f4f1e6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5 md:py-6">
        {/* LOGO + NAME */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Adennil Foundation Logo"
            className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover"
          />
          <h2 className="text-[1.55rem] md:text-[1.9rem] font-bold font-[Playfair_Display] text-[#4B0082] leading-none">
            Adennil Foundation
          </h2>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.to}
              className="text-[#1d180c] text-[1.1rem] font-medium hover:text-[#FFC107] transition"
            >
              {l.name}
            </Link>
          ))}

          {/* DONATE BUTTON */}
          <Link
            to="/get-involved"
            className="bg-[#FFC107] text-[#1d180c] text-[1.3rem] font-semibold w-[150px] h-[50px] flex justify-center items-center rounded-sm hover:bg-[#e0a800] transition"
          >
            Donate Now
          </Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-3 hover:bg-gray-200/50 rounded-lg"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden flex flex-col px-6 pb-5 gap-5 bg-[#fcfbf8]/95">
          {navLinks.map((l) => (
            <Link
              key={l.name}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-[#1d180c] text-lg font-medium py-1 hover:text-[#FFC107]"
            >
              {l.name}
            </Link>
          ))}

          <Link
            to="/get-involved"
            className="bg-[#FFC107] text-[#1d180c] text-[1.3rem] font-semibold w-[150px] h-[50px] flex justify-center items-center rounded-sm hover:bg-[#e0a800] transition"
          >
            Donate Now
          </Link>
        </div>
      )}
    </header>
  );
}
