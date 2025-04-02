"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation"; 
import { pageData } from "../data/pageData"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isTablet, setIsTablet] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState<{ title: string; path: string }[]>([]);
  const router = useRouter();

  

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= 1024); // Toggle menu for tablet & mobile
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handle search input changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredResults([]);
    } else {
      const results = pageData.filter((page) =>
        page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        page.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setFilteredResults(results);
    }
  }, [searchQuery]);

    // Handle search result click
    const handleResultClick = (path: string) => {
      setSearchQuery(""); // Clear search input
      setFilteredResults([]); // Hide search results
      router.push(path); // Navigate to selected page
    };

  const handleDropdownOpen = (menu: string | null) => {
    setOpenDropdown(menu === openDropdown ? null : menu);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const closeMobileMenu = () => {
    setMenuOpen(false);
    closeDropdown();
  };

  const navLinks = [
    {
      label: "STEAM",
      links: [
        { name: "About Steam", path: "/steam/about-steam" },
        { name: "Program Calendar", path: "/steam/program-calendar" },
        { name: "Auroville Program", path: "/steam/auroville" },
        { name: "Visitor Program", path: "/steam/visitor" },
      ],
    },
    {
      label: "Bridge",
      links: [
        { name: "About Bridge", path: "/bridge/about" },
        { name: "Program Calendar", path: "/bridge/bridge-program" },
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
        { name: "Newsletter", path: "/stories/newsletters" },
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
    <header className="bg-white shadow-lg shadow-gray-300 w-full px-4 sm:px-6 md:px-14 lg:px-18 top-0 left-0 z-50 backdrop-blur-lg fixed">
      <nav className="flex items-center justify-between py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} priority style={{ width: "auto", height: "auto" }} />
        </div>

        {/* Mobile & Tablet Menu Button */}
        <button className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? <HiX size={28} /> : <HiOutlineMenu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex lg:space-x-8 xl:space-x-12 text-black font-medium font-primary">
          <li className="hover:text-[#592AC7] transition duration-200"><Link href="/" onClick={closeDropdown}>Home</Link></li>
          <li className="hover:text-[#592AC7] transition duration-200"><Link href="/about-us" onClick={closeDropdown}>About Us</Link></li>

          {navLinks.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => handleDropdownOpen(menu.label)}
              onMouseLeave={closeDropdown}
            >
              <button className="flex items-center">
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
                        <Link href={link.path} onClick={closeDropdown}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Search & Donate Button (Hidden on Tablets & Mobile) */}
        <div className="relative hidden lg:flex bg-gray-100 p-2 rounded-[15px] items-center">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none pl-2 w-40 sm:w-48 md:w-58"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* Display Search Results */}
          {filteredResults.length > 0 && (
            <ul className="absolute top-12 left-0 w-full bg-white shadow-md rounded-md max-h-60 overflow-auto">
              {filteredResults.map((result, index) => (
                <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleResultClick(result.path)}>
                  {result.title}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button href="/donate">Donate</Button>
      </nav>

      {/* Mobile & Tablet Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden flex flex-col space-y-4 py-4 bg-white"
          >
            <Link href="/" onClick={closeMobileMenu}>Home</Link>
            <Link href="/about" onClick={closeMobileMenu}>About Us</Link>

            {navLinks.map((menu, index) => (
              <div key={index}>
                <button onClick={() => handleDropdownOpen(menu.label)} className="flex items-center w-full text-left hover:text-[#592AC7] transition duration-300 ">
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
                          <Link href={link.path} onClick={closeMobileMenu}>
                            {link.name}
                          </Link>
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
