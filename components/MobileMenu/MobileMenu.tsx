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
  },
  {
    id: 2,
    title: "Company",
    link: "#",
    submenu: [
      { id: 21, title: "About Us", link: "/about" },
      { id: 22, title: "Portfolio", link: "/project" },
      { id: 23, title: "Elena.AI", link: "/elena-ai" },
    ],
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
    title: "Solutions",
    link: "/solutions",
  },
  {
    id: 5,
    title: "Resources",
    link: "#",
    submenu: [
      { id: 51, title: "Free Downloads", link: "/resources" },
      { id: 52, title: "Blog", link: "/blog" },
      { id: 53, title: "Pricing", link: "/#pricing" },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

export default function MobileMenu() {
  const [openId, setOpenId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
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