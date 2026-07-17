// components/FloatingNav.jsx
import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { to: "hero", label: "Home" },
  { to: "about", label: "About" },
  { to: "projects", label: "Projects" },
  { to: "skills", label: "Skills" },
  { to: "services", label: "Services" },
  { to: "contact", label: "Contact" },
];

const FloatingNav = () => {
  const [open, setOpen] = useState(false);

  const linkBase =
    "px-3 py-1 rounded-xl font-semibold cursor-pointer transition-all duration-300 ease-out block";

  return (
    <nav className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">
      {/* Desktop */}
      <div className="hidden sm:flex bg-white/30 dark:bg-black/30 backdrop-blur-md px-6 py-3 rounded-xl shadow-md gap-2 md:gap-4 transition-all duration-300">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            smooth
            duration={500}
            spy
            offset={-80}
            activeClass="bg-black text-white scale-105 shadow-lg ring-1 ring-white/20"
            className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile toggle */}
      <div className="sm:hidden w-full flex justify-end">
        <button
          onClick={() => setOpen(!open)}
          className="bg-white/40 dark:bg-black/10 backdrop-blur-md p-3 rounded-xl shadow-md"
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden absolute top-16 right-4 bg-white/90 dark:bg-black/10 backdrop-blur-md rounded-xl shadow-lg flex flex-col gap-1 p-3 w-48">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              spy
              offset={-80}
              onClick={() => setOpen(false)}
              activeClass="bg-black text-white"
              className={`${linkBase} hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default FloatingNav;