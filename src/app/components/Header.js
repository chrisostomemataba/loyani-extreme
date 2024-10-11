"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import styles from "../../styles/header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [safariAnchorEl, setSafariAnchorEl] = useState(null);
  const [accommodationAnchorEl, setAccommodationAnchorEl] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSafariClick = (event) => {
    setSafariAnchorEl(event.currentTarget);
  };

  const handleAccommodationClick = (event) => {
    setAccommodationAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setSafariAnchorEl(null);
    setAccommodationAnchorEl(null);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/loyani.png"
              alt="Loyani Tours Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
            <h1 className="text-white text-xl font-bold ml-4 md:text-3xl">
              Loyani Tours & Safaris
            </h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`transition-colors duration-200 py-2 px-4 rounded ${
                isScrolled ? "text-loyani-primary" : "text-white"
              } hover:text-loyani-accent`}
            >
              Home
            </Link>
            <div className="relative">
              <button
                onClick={handleSafariClick}
                className="text-white hover:text-loyani-accent transition-colors duration-200 flex items-center"
              >
                Safaris <ArrowDropDown />
              </button>
              <Menu
                anchorEl={safariAnchorEl}
                open={Boolean(safariAnchorEl)}
                onClose={handleClose}
                className="mt-2"
              >
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/safaris/discover-the-peaks"
                >
                  Discover the Peaks
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/safaris/cultural-safaris"
                >
                  Cultural Safaris
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/safaris/luxury-safaris"
                >
                  Luxury Safaris
                </MenuItem>
              </Menu>
            </div>
            <div className="relative">
              <button
                onClick={handleAccommodationClick}
                className="text-white hover:text-loyani-accent transition-colors duration-200 flex items-center"
              >
                Accommodation <ArrowDropDown />
              </button>
              <Menu
                anchorEl={accommodationAnchorEl}
                open={Boolean(accommodationAnchorEl)}
                onClose={handleClose}
                className="mt-2"
              >
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/accomodation/kilimanjaro"
                >
                  Hotels Near Mount Kilimanjaro
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/accomodation/serengeti"
                >
                  Hotels in Serengeti
                </MenuItem>
              </Menu>
            </div>
            <Link
              href="/about"
              className={`transition-colors duration-200 py-2 px-4 rounded ${
                isScrolled ? "text-loyani-primary" : "text-white"
              } hover:text-loyani-accent`}
            >
              About Us
            </Link>
            <Link
              href="/about#founder-section"
              className={`transition-colors duration-200 py-2 px-4 rounded ${
                isScrolled ? "text-loyani-primary" : "text-white"
              } hover:text-loyani-accent`}
            >
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-3xl focus:outline-none"
            >
              &#9776;
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-white bg-opacity-95 p-4 absolute w-full left-0 top-full z-50 shadow-md">
          <Link
            href="/"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/safaris/discover-the-peaks"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Discover the Peaks
          </Link>
          <Link
            href="/safaris/cultural-safaris"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Cultural Safaris
          </Link>
          <Link
            href="/safaris/luxury-safaris"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Luxury Safaris
          </Link>
          <Link
            href="/accommodation/kilimanjaro"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Hotels Near Mount Kilimanjaro
          </Link>
          <Link
            href="/accommodation/serengeti"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Hotels in Serengeti
          </Link>
          <Link
            href="/about"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/about#founder-section"
            className="block py-2 text-loyani-primary hover:text-loyani-accent transition-colors duration-200"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}