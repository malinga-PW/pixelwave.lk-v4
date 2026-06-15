"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import Collapse from "@mui/material/Collapse";
import "./style.css";

interface MenuItem {
  id: number;
  title: string;
  link: string;
  submenu?: MenuItem[];
}

const menus: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    submenu: [
      { id: 11, title: "🚀 Hero Section", link: "/#hero" },
      { id: 12, title: "ℹ️ About Us", link: "/#about" },
      { id: 13, title: "🛠️ Main Services", link: "/#services" },
      { id: 14, title: "⚡ Key Features", link: "/#features" },
      { id: 15, title: "💼 Portfolio Cases", link: "/#portfolio" },
      { id: 16, title: "💬 Testimonials", link: "/#testimonials" },
      { id: 17, title: "💰 Pricing & Plans", link: "/#pricing" },
      { id: 18, title: "❓ Frequently Asked FAQ", link: "/#faq" },
      { id: 19, title: "✍️ Latest Blog News", link: "/#blog" },
      { id: 110, title: "📞 Get in Touch", link: "/#contact" }
    ]
  },
  {
    id: 2,
    title: "Solutions",
    link: "/solutions",
    submenu: [
      { id: 21, title: "🏢 Corporate", link: "/solutions#corporate" },
      { id: 22, title: "🛒 Retail & E-Commerce", link: "/solutions#retail" },
      { id: 23, title: "🏥 Healthcare Systems", link: "/solutions#healthcare" },
      { id: 24, title: "🏡 Real Estate Portals", link: "/solutions#real-estate" },
      { id: 25, title: "🚀 Startups & SaaS", link: "/solutions#startups" },
      { id: 26, title: "🤖 Custom AI Agents", link: "/solutions#custom" }
    ]
  },
  {
    id: 3,
    title: "Services",
    link: "/service",
    submenu: [
      { id: 31, title: "Premium Websites", link: "/service/premium-websites" },
      { id: 32, title: "E-Commerce", link: "/service/e-commerce-solutions" },
      { id: 33, title: "AI Automation", link: "/service/ai-automation" },
      { id: 34, title: "n8n Development", link: "/service/n8n-development" },
      { id: 35, title: "SaaS Development", link: "/service/saas-development" },
      { id: 36, title: "Branding & Design", link: "/service/branding-design" },
    ],
  },
  {
    id: 4,
    title: "Resources",
    link: "#",
    submenu: [
      { id: 41, title: "Free Downloads", link: "/resources" },
      { id: 42, title: "Blog", link: "/blog" },
      { id: 43, title: "Pricing", link: "/#pricing" },
      { id: 44, title: "Case Studies", link: "/project" },
      { id: 45, title: "Elena AI Chatbot", link: "/elena-ai" }
    ],
  },
  {
    id: 5,
    title: "Company",
    link: "#",
    submenu: [
      { id: 51, title: "About Us", link: "/about" },
      { id: 52, title: "Portfolio", link: "/project" },
      { id: 53, title: "Elena.AI", link: "/elena-ai" },
      { id: 54, title: "Our Team", link: "/team" },
      { id: 55, title: "Careers", link: "/career" }
    ],
  },
  {
    id: 6,
    title: "Contact Us",
    link: "/contact",
    submenu: [
      { id: 61, title: "✉️ Send Message", link: "/contact" },
      { id: 62, title: "💰 Get a Quote", link: "/contact?quote=true" },
      { id: 63, title: "📞 Book Consultation", link: "/contact#book" },
      { id: 64, title: "📍 Office Location", link: "/contact#info" }
    ]
  },
];

export default function MobileMenu() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    // Smooth scroll if active anchor, else default window scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ul className="responsivemenu">
      {menus.map((menu) => (
        <li key={menu.id} className={openId === menu.id ? "active" : ""}>
          {menu.submenu ? (
            <Fragment>
              <p onClick={() => handleToggle(menu.id)}>
                {menu.title}
                <i
                  className={
                    openId === menu.id ? "fa fa-angle-up" : "fa fa-angle-down"
                  }
                ></i>
              </p>

              {/* MUI Collapse */}
              <Collapse in={openId === menu.id} timeout="auto" unmountOnExit>
                <ul className="subMenu">
                  {menu.submenu.map((sub) => (
                    <li key={sub.id}>
                      <Link href={sub.link} onClick={handleClick}>
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Collapse>
            </Fragment>
          ) : (
            <Link href={menu.link} onClick={handleClick}>
              {menu.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};