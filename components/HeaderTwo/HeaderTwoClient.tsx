"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/images/logo/logo-two.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import MegaMenu1 from "../Header/MegaMenu1";
import MegaMenuServices from "../Header/MegaMenu2";

export default function HeaderTwoClient() {
    const [isSticky, setIsSticky] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [mobileActive, setMobileActive] = useState(false);

    const lastScrollY = useRef(0);

    /* ================= Sticky Header ================= */
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            if (current < lastScrollY.current && current > 100) {
                setIsSticky(true);
                setTimeout(() => setIsVisible(true), 10);
            } else if (current > lastScrollY.current) {
                setIsVisible(false);
                setTimeout(() => setIsSticky(false), 120);
            }

            if (current <= 100) {
                setIsSticky(false);
                setIsVisible(false);
            }

            lastScrollY.current = current;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* ================= Handlers ================= */
    const toggleMobileMenu = useCallback(() => {
        setMobileActive((prev) => !prev);
    }, []);

    const closeMobileMenu = useCallback(() => {
        setMobileActive(false);
    }, []);

    const preventSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
    }, []);

    const preventDefault = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
    }, []);

    /* ================= RENDER ================= */
    return (
        <header
            id="xb-header-area"
            className="header-area header-style--two header-style--three header-transparent"
        >
            <div
                className={`xb-header stricky
          ${isSticky ? "xb-header-area-sticky" : ""}
          ${isVisible ? "xb-header-fixed" : "xb-header-hidden"}`}
            >
                <div className="container-fluid plr-30">
                    <div className="header__wrap ul_li_between">

                        {/* Logo */}
                        <div className="xb-header-logo">
                            <Link href="/" className="logo1">
                                <Image src={logo} alt="Aivora Logo" priority />
                            </Link>
                        </div>

                        {/* Navigation */}
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

                        {/* CTA Button */}
                        <div className="header-right">
                            <Link className="ai-marketing-btn" href="/contact">
                                <span className="arrow">
                                    <span className="arrow">
                                        <svg
                                            width="16"
                                            height="28"
                                            viewBox="0 0 16 28"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect
                                                x="11.9299"
                                                y="12.4632"
                                                width="3.80516"
                                                height="3.83411"
                                                transform="rotate(-0.1709 11.9299 12.4632)"
                                                fill="black"
                                            />
                                            <rect
                                                x="0.843506"
                                                y="0.994343"
                                                width="3.83411"
                                                height="3.83411"
                                                transform="rotate(-0.1709 0.843506 0.994343)"
                                                fill="black"
                                            />
                                            <rect
                                                x="4.68921"
                                                y="4.81607"
                                                width="3.83411"
                                                height="3.83411"
                                                transform="rotate(-0.1709 4.68921 4.81607)"
                                                fill="black"
                                            />
                                            <rect
                                                x="8.53442"
                                                y="8.63861"
                                                width="3.83411"
                                                height="3.83411"
                                                transform="rotate(-0.1709 8.53442 8.63861)"
                                                fill="black"
                                            />
                                            <rect
                                                x="8.55786"
                                                y="16.3068"
                                                width="3.83411"
                                                height="3.83411"
                                                transform="rotate(-0.1709 8.55786 16.3068)"
                                                fill="black"
                                            />
                                            <rect
                                                x="4.73535"
                                                y="20.1535"
                                                width="3.83411"
                                                height="3.83411"
                                                transform="rotate(-0.1709 4.73535 20.1535)"
                                                fill="black"
                                            />
                                            <rect
                                                x="0.912354"
                                                y="23.9985"
                                                width="3.83411"
                                                height="3.83411"
                                                transform="rotate(-0.1709 0.912354 23.9985)"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </span>
                                <span className="text">
                                    <span>Book a Free Discovery Session</span>
                                    <span>Book a Free Discovery Session</span>
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Button */}
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

                                <div className="xb-menu-close xb-hide-xl xb-close" onClick={closeMobileMenu} />

                                <div className="xb-logo-mobile xb-hide-xl">
                                    <Link href="/">
                                        <Image src={logo} alt="Aivora Logo" />
                                    </Link>
                                </div>

                                <div className="xb-header-mobile-search xb-hide-xl">
                                    <form onSubmit={preventSubmit}>
                                        <input type="text" placeholder="Search..." />
                                        <button type="submit">
                                            <i className="far fa-search"></i>
                                        </button>
                                    </form>
                                </div>

                                <nav className="xb-header-nav">
                                    <MobileMenu />
                                </nav>
                            </div>
                        </div>

                        <div className="xb-header-menu-backdrop" onClick={closeMobileMenu} />
                    </div>

                </div>
            </div>
        </header>
    );
}
