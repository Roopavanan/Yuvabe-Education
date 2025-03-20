"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (menu: string | null) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const navLinks = [
    {
      label: "STEAM",
      links: [
        { name: "About Steam", path: "/steam/about" },
        { name: "Program Calendar", path: "/steam/calendar" },
        { name: "Auroville Program", path: "/steam/auroville" },
        { name: "Visitor Program", path: "/steam/visitor" },
      ],
    },
    {
      label: "Bridge",
      links: [
        { name: "About Bridge", path: "/bridge/about" },
        { name: "Program Calendar", path: "/bridge/calendar" },
        { name: "Digital Marketing", path: "/bridge/digital-marketing" },
        { name: "UI/UX", path: "/bridge/ui-ux" },
        { name: "AI", path: "/bridge/ai" },
        { name: "Corporate Sustainability", path: "/bridge/sustainability" },
        { name: "Market Research", path: "/bridge/market-research" },
        { name: "Workshop", path: "/bridge/workshop" },
      ],
    },
    {
      label: "Our Stories",
      links: [
        { name: "Blogs", path: "/stories/blogs" },
        { name: "Newsletter", path: "/stories/newsletter" },
        { name: "Impact Report", path: "/stories/impact-report" },
      ],
    },
    {
      label: "Get Involved",
      links: [
        { name: "We Serve", path: "/get-involved/we-serve" },
        { name: "We Evolve", path: "/get-involved/we-evolve" },
        { name: "Support Us", path: "/get-involved/support-us" },
        { name: "Join Us", path: "/get-involved/join-us" },
        { name: "Talk to Us", path: "/get-involved/talk-to-us" },
      ],
    },
  ];

  return (
    <header className="bg-white shadow-lg shadow-gray-300 w-full px-4 sm:px-6 md:px-14 lg:px-18 top-0 left-0  z-50 backdrop-blur-lg fixed">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex md:space-x-8 lg:space-x-12 text-black font-medium font-primary">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          {navLinks.map((menu, index) => (
            <li key={index} className="relative">
              <button onClick={() => toggleDropdown(menu.label)} className="flex items-center">
                {menu.label} <IoMdArrowDropdown className="ml-1" />
              </button>
              <AnimatePresence>
                {openDropdown === menu.label && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-44 bg-white shadow-lg p-2 rounded-md"
                  >
                    {menu.links.map((link, i) => (
                      <li key={i} className="py-2 px-4 hover:bg-gray-100">
                        <Link href={link.path}>{link.name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Search & Donate Button */}
        <div className="hidden md:flex items-center space-x-12">
          <div className="hidden sm:flex bg-gray-100 p-2 rounded-[15px] items-center">
            <FiSearch className="text-gray-500" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none pl-2 w-40 sm:w-48 md:w-58" />
          </div>
            <Button href="/donate">Donate</Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex flex-col space-y-4 py-4 bg-white"
          >
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            {navLinks.map((menu, index) => (
              <div key={index}>
                <button onClick={() => toggleDropdown(menu.label)} className="flex items-center w-full text-left">
                  {menu.label} <IoMdArrowDropdown className="ml-1" />
                </button>
                <AnimatePresence>
                  {openDropdown === menu.label && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {menu.links.map((link, i) => (
                        <li key={i} className="py-1">
                          <Link href={link.path}>{link.name}</Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ))}
             <Button onClick={() => alert("Button Clicked!")}>Donate</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
