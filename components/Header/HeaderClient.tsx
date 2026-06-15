"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "@/public/images/logo/logo.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MegaMenuHome from "./MegaMenuHome";
import MegaMenuSolutions from "./MegaMenuSolutions";
import MegaMenuServices from "./MegaMenu2";
import MegaMenuResources from "./MegaMenuResources";
import MegaMenuCompany from "./MegaMenuCompany";
import MegaMenuContact from "./MegaMenuContact";

/* ── Custom Language Select Options ── */
const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "si", label: "සිංහල", flag: "🇱🇰" },
  { code: "ta", label: "தமிழ்", flag: "🇱🇰" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function HeaderClient() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);
  const lastScrollY = useRef(0);

  /* ── Language States ── */
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectorRef = useRef<HTMLDivElement>(null);

  /* ── active check ── */
  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname?.startsWith(href) ?? false;
  };

  /* ── Sticky Header & Click Outside & Translation Loader ── */
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

    const handleOutsideClick = (e: MouseEvent) => {
      if (selectorRef.current && !selectorRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  /* ── Google Translate Initialization ── */
  useEffect(() => {
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,si,ta,es,de,fr,ja,zh-CN",
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }
  }, []);

  /* ── Read Initial Language Cookie ── */
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
    };

    const googtrans = getCookie("googtrans");
    if (googtrans) {
      const parts = googtrans.split("/");
      const langCode = parts[parts.length - 1];
      const matched = LANGUAGES.find((l) => l.code === langCode);
      if (matched) {
        setSelectedLang(matched);
      }
    }
  }, []);

  const handleLangChange = (langCode: string) => {
    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
      const matched = LANGUAGES.find((l) => l.code === langCode);
      if (matched) setSelectedLang(matched);
      setDropdownOpen(false);
    }
  };

  const toggleMobileMenu = useCallback(() => setMobileActive((p) => !p), []);
  const closeMobileMenu  = useCallback(() => setMobileActive(false), []);
  const preventFormSubmit = useCallback((e: React.FormEvent) => e.preventDefault(), []);

  return (
    <header
      id="xb-header-area"
      className="header-area header-style--one header-transparent is-sticky"
    >
      {/* Google Translate Hidden Div */}
      <div id="google_translate_element" style={{ display: "none" }} />

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

            {/* Desktop Menu - Reordered and turned into Mega Menus */}
            <div className="main-menu__wrap navbar navbar-expand-lg p-0">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  {/* Home */}
                  <li className={`menu-item-has-children megamenu ${isActive("/", true) ? "pw-active" : ""}`}>
                    <Link href="/">Home</Link>
                    <MegaMenuHome />
                  </li>

                  {/* Solutions */}
                  <li className={`menu-item-has-children megamenu ${isActive("/solutions", false) ? "pw-active" : ""}`}>
                    <Link href="/solutions">Solutions</Link>
                    <MegaMenuSolutions />
                  </li>

                  {/* Services */}
                  <li className={`menu-item-has-children megamenu ${isActive("/service", false) ? "pw-active" : ""}`}>
                    <Link href="/service">Services</Link>
                    <MegaMenuServices />
                  </li>

                  {/* Resources */}
                  <li className={`menu-item-has-children megamenu ${
                    pathname?.startsWith("/resources") || pathname?.startsWith("/blog") ? "pw-active" : ""
                  }`}>
                    <Link href="#">Resources</Link>
                    <MegaMenuResources />
                  </li>

                  {/* Company */}
                  <li className={`menu-item-has-children megamenu ${
                    pathname?.startsWith("/about") || pathname?.startsWith("/project") || pathname?.startsWith("/elena-ai") ? "pw-active" : ""
                  }`}>
                    <Link href="#">Company</Link>
                    <MegaMenuCompany />
                  </li>

                  {/* Contact Us */}
                  <li className={`menu-item-has-children megamenu ${isActive("/contact", false) ? "pw-active" : ""}`}>
                    <Link href="/contact">Contact Us</Link>
                    <MegaMenuContact />
                  </li>
                </ul>
              </nav>
            </div>

            {/* Header Buttons and Custom Translator Dropdown */}
            <div className="header-action-group ul_li align-items-center">
              
              {/* Custom Google Translate Dropdown Selector */}
              <div className="custom-language-selector notranslate position-relative me-3" ref={selectorRef}>
                <button
                  type="button"
                  className="lang-btn ul_li align-items-center"
                  onClick={() => setDropdownOpen((prev) => !prev)}
                >
                  <span className="lang-flag">{selectedLang.flag}</span>
                  <span className="lang-label d-none d-xxl-inline ms-1">{selectedLang.label}</span>
                  <i className="far fa-angle-down ms-2" />
                </button>

                {dropdownOpen && (
                  <ul className="lang-dropdown position-absolute list-unstyled m-0 p-0">
                    {LANGUAGES.map((lang) => (
                      <li key={lang.code}>
                        <button
                          type="button"
                          className={`lang-option ul_li align-items-center w-100 ${
                            selectedLang.code === lang.code ? "active" : ""
                          }`}
                          onClick={() => handleLangChange(lang.code)}
                        >
                          <span className="lang-flag">{lang.flag}</span>
                          <span className="lang-label ms-2">{lang.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Get a Quote Button */}
              <div className="header-btn">
                <Link href="/contact" className="thm-btn">
                  Get a Quote
                </Link>
              </div>

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
