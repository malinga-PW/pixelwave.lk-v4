"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MegaMenu1 from "./MegaMenu1";
import MegaMenuServices from "./MegaMenu2";

export default function HeaderClient() {
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  const lastScrollY = useRef(0);

  /* ================================
      Sticky Header Logic
  ================================= */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScrollY.current && currentScroll > 100) {
        setIsSticky(true);
        setTimeout(() => setIsVisible(true), 10);
      } else if (currentScroll > lastScrollY.current) {
        setIsVisible(false);
        setTimeout(() => setIsSticky(false), 100);
      }

      if (currentScroll <= 100) {
        setIsSticky(false);
        setIsVisible(false);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================================
      Memoized Handlers
  ================================= */
  const toggleMobileMenu = useCallback(() => {
    setMobileActive((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileActive(false);
  }, []);

  const preventFormSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  const preventDefault = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >
      <div
        className={`xb-header xb-sticky-stt
          ${isSticky ? "xb-header-area-sticky" : ""}
          ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
      >
        <div className="container mxw-1650">
          <div className="header__wrap ul_li_between">

            {/* Logo */}
            <div className="xb-header-logo">
              <Link href="/" className="logo1">
                <Image src={logo} alt="Logo" priority />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li className="menu-item-has-children active">
                    <Link href="/">Home</Link>
                    <ul className="submenu">
                      <li><Link href="/">Ai Agency</Link></li>
                      <li><Link href="/ai-marketing">Ai Marketing</Link></li>
                      <li><Link href="/ai-chatbot">Ai Chatbot</Link></li>
                    </ul>
                  </li>

                  <li><Link href="/about">About Us</Link></li>

                  <li className="menu-item-has-children megamenu">
                    <Link href="#" onClick={preventDefault}>Pages</Link>
                    <MegaMenu1 />
                  </li>

                  <li className="menu-item-has-children megamenu">
                    <Link href="#" onClick={preventDefault}>Services</Link>
                    <MegaMenuServices />
                  </li>

                  <li className="menu-item-has-children">
                    <Link href="/blog">Blog</Link>
                    <ul className="submenu">
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>

                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </nav>
            </div>

            {/* Header Button */}
            <div className="header-btn">
              <Link href="/contact" className="thm-btn">
                Join Now
              </Link>
            </div>

            {/* Mobile Toggle */}
            <div className="header-bar-mobile side-menu d-lg-none">
              <button className="xb-nav-mobile" onClick={toggleMobileMenu}>
                <i className="far fa-bars"></i>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="xb-header-wrap">
            <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
              <div className="xb-header-menu-scroll">

                <div
                  className="xb-menu-close xb-hide-xl xb-close"
                  onClick={closeMobileMenu}
                />

                <div className="xb-logo-mobile xb-hide-xl">
                  <Link href="/">
                    <Image src={logo} alt="Logo" />
                  </Link>
                </div>

                <div className="xb-header-mobile-search xb-hide-xl">
                  <form role="search" onSubmit={preventFormSubmit}>
                    <input type="text" className="search-field" placeholder="Search..." />
                    <button type="submit" className="search-submit"> 
                      <i className="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <nav className="xb-header-nav">
                  <MobileMenu />
                </nav>

              </div>
            </div>

            <div
              className="xb-header-menu-backdrop"
              onClick={closeMobileMenu}
            />
          </div>

        </div>
      </div>
    </header>
  );
}
