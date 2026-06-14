"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/public/images/logo/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MegaMenu1 from "./MegaMenu1";
import MegaMenuServices from "./MegaMenu2";

/* ── Route → label map for active detection ── */
const NAV_LINKS = [
  { href: "/",           label: "Home",       exact: true },
  { href: "/about",      label: "About Us",   exact: false },
  { href: "/service",    label: "Services",   exact: false },
  { href: "/solutions",  label: "Solutions",  exact: false },
  { href: "/#pricing",   label: "Pricing",    exact: false },
  { href: "/project",    label: "Portfolio",  exact: false },
  { href: "/blog",       label: "Blog",       exact: false },
  { href: "/resources",  label: "Resources",  exact: false },
  { href: "/elena-ai",   label: "Elena.AI",   exact: false },
  { href: "/contact",    label: "Contact Us", exact: false },
];

export default function HeaderClient() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const lastScrollY = useRef(0);

  /* ── active check ── */
  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname?.startsWith(href) ?? false;
  };

  /* ── Sticky Header Logic ── */
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

  const toggleMobileMenu = useCallback(() => setMobileActive((p) => !p), []);
  const closeMobileMenu  = useCallback(() => setMobileActive(false), []);
  const preventFormSubmit = useCallback((e: React.FormEvent) => e.preventDefault(), []);
  const preventDefault    = useCallback((e: React.MouseEvent) => e.preventDefault(), []);

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
                  <li className={isActive("/", true) ? "pw-active" : ""}>
                    <Link href="/">Home</Link>
                  </li>

                  <li className={`menu-item-has-children ${
                    pathname?.startsWith("/about") || pathname?.startsWith("/project") || pathname?.startsWith("/elena-ai") ? "pw-active" : ""
                  }`}>
                    <Link href="#">Company</Link>
                    <ul className="submenu">
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/project">Portfolio</Link></li>
                      <li><Link href="/elena-ai">Elena.AI</Link></li>
                    </ul>
                  </li>

                  <li className={`menu-item-has-children megamenu ${
                    pathname?.startsWith("/service") ? "pw-active" : ""
                  }`}>
                    <Link href="/service">Services</Link>
                    <MegaMenuServices />
                  </li>

                  <li className={isActive("/solutions", false) ? "pw-active" : ""}>
                    <Link href="/solutions">Solutions</Link>
                  </li>

                  <li className={`menu-item-has-children ${
                    pathname?.startsWith("/resources") || pathname?.startsWith("/blog") ? "pw-active" : ""
                  }`}>
                    <Link href="#">Resources</Link>
                    <ul className="submenu">
                      <li><Link href="/resources">Free Downloads</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/#pricing">Pricing</Link></li>
                    </ul>
                  </li>

                  <li className={isActive("/contact", false) ? "pw-active" : ""}>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Header Button */}
            <div className="header-btn">
              <Link href="/contact" className="thm-btn">
                Get a Quote
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
