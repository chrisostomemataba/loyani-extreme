"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { ArrowDropDown, Menu as MenuIcon, Close } from "@mui/icons-material";
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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/loyani.png"
              alt="Loyani Tours Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <h1
              className={`${styles.logo} ml-2 md:ml-4 text-lg md:text-xl lg:text-2xl font-bold`}
            >
              Loyani Tours & Safaris
            </h1>
          </div>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <div className="relative">
              <button
                onClick={handleSafariClick}
                className={`${styles.navItem} flex items-center`}
              >
                Safaris <ArrowDropDown />
              </button>
              <Menu
                anchorEl={safariAnchorEl}
                open={Boolean(safariAnchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  className: styles.menuList,
                }}
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
                className={`${styles.navItem} flex items-center`}
              >
                Accommodation <ArrowDropDown />
              </button>
              <Menu
                anchorEl={accommodationAnchorEl}
                open={Boolean(accommodationAnchorEl)}
                onClose={handleClose}
                MenuListProps={{
                  className: styles.menuList,
                }}
              >
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/accommodation/kilimanjaro"
                >
                  Hotels Near Mount Kilimanjaro
                </MenuItem>
                <MenuItem
                  onClick={handleClose}
                  component={Link}
                  href="/accommodation/serengeti"
                >
                  Hotels in Serengeti
                </MenuItem>
              </Menu>
            </div>
            <Link href="/about" className={styles.navItem}>
              About Us
            </Link>
            <Link href="/about#founder-section" className={styles.navItem}>
              Contact
            </Link>
          </nav>
          <button
            onClick={toggleMenu}
            className={`${styles.menuToggle} md:hidden`}
            aria-label="Toggle mobile menu"
          >
            {menuOpen ? <Close /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileNavItem} onClick={toggleMenu}>
            Home
          </Link>
          <Link
            href="/safaris/discover-the-peaks"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            Discover the Peaks
          </Link>
          <Link
            href="/safaris/cultural-safaris"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            Cultural Safaris
          </Link>
          <Link
            href="/safaris/luxury-safaris"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            Luxury Safaris
          </Link>
          <Link
            href="/accomodation/kilimanjaro"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            Hotels Near Mount Kilimanjaro
          </Link>
          <Link
            href="/accomodation/serengeti"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            Hotels in Serengeti
          </Link>
          <Link
            href="/about"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/about#founder-section"
            className={styles.mobileNavItem}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
