import Link from "next/link";
import Image from "next/image";

import footerBg from "@/public/images/bg/footer-bg.png";
import emailIcon from "@/public/images/icon/email-icon.svg";
import locationIcon from "@/public/images/icon/location-icon.svg";
import callIcon from "@/public/images/icon/call-icon.svg";

/* ----------------------------------------
    Reusable SVG Components
---------------------------------------- */
function ArrowIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5.066" y="19.278" width="20.571" height="2.612" transform="rotate(-40.28 5.066 19.278)" fill="white" />
      <rect x="7.971" y="6.544" width="2.612" height="2.612" transform="rotate(-40.28 7.971 6.544)" fill="white" />
      <rect x="11.653" y="6.848" width="2.612" height="2.612" transform="rotate(-40.28 11.653 6.848)" fill="white" />
      <rect x="15.334" y="7.152" width="2.612" height="2.612" transform="rotate(-40.28 15.334 7.152)" fill="white" />
      <rect x="18.712" y="11.137" width="2.612" height="2.612" transform="rotate(-40.28 18.712 11.137)" fill="white" />
      <rect x="18.409" y="14.820" width="2.612" height="2.612" transform="rotate(-40.28 18.409 14.820)" fill="white" />
      <rect x="18.104" y="18.501" width="2.612" height="2.612" transform="rotate(-40.28 18.104 18.501)" fill="white" />
    </svg>
  );
}

/* ----------------------------------------
    Social Icon Components
---------------------------------------- */
const FacebookIcon = () => <i className="fa-brands fa-facebook"></i>;

const TwitterIcon = () => (
  <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
    <path
      d="M9.46973 0C14.6996 0 18.9395 4.25357 18.9395 9.5C18.9394 14.7464 14.6996 19 9.46973 19C4.24002 18.9998 8.74258e-05 14.7463 0 9.5C0 4.25366 4.23997 0.000150177 9.46973 0ZM8.27441 10.1201L4.02344 15.0771H4.98438L8.70117 10.7422L11.6709 15.0771H14.9131L10.5039 8.64062L14.5586 3.91309H13.5977L10.0771 8.01758L7.26562 3.91309H4.02344L8.27441 10.1201ZM13.5977 14.3848H12.1221L5.33008 4.63867H6.80566L13.5977 14.3848Z"
      fill="#FFF"
    />
  </svg>
);

const LinkedinIcon = () => <i className="fa-brands fa-linkedin"></i>;

const YoutubeIcon = () => <i className="fa-brands fa-square-youtube"></i>;

/* ----------------------------------------
    Social Items Array (Stable Components)
---------------------------------------- */
const socials = [
  { icon: <FacebookIcon />, name: "Facebook", url: "https://facebook.com" },
  { icon: <TwitterIcon />, name: "Twitter", url: "https://twitter.com" },
  { icon: <LinkedinIcon />, name: "LinkedIn", url: "https://linkedin.com" },
  { icon: <YoutubeIcon />, name: "YouTube", url: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer
      className="footer footer-style-one pt-145 bg_img"
      style={{ backgroundImage: `url(${footerBg.src})` }}
    >
      <div className="xb-footer-wrap">

        {/* Heading */}
        <div className="xb-footer-heading wow zoomIn" data-wow-duration="600ms">
          <h1 className="title">Aivora</h1>

          <a className="mail" href="mailto:aivora@domain.com">
            <Image src={emailIcon} alt="email" />
            aivora@domain.com
          </a>
        </div>

        {/* Navigation */}
        <div className="xb-footer-nav">
          {[
            { label: "What we do?", title: "Services", href: "/service" },
            { label: "Who we are?", title: "About us", href: "/about" },
            { label: "How we deliver", title: "Contact us", href: "/contact" },
            { label: "What we're good at?", title: "Our project", href: "/project" },
            { label: "News?", title: "News", href: "/blog" },
          ].map((item, i) => (
            <div className="xb-footer-nav-item" key={i}>
              <span className="sub-title">{item.label}</span>
              <h2 className="title">
                <Link href={item.href}>{item.title}</Link>
              </h2>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="xb-social-media-wrap">
          {socials.map((social, idx) => (
            <div className="xb-social-media-item ul_li_between" key={idx}>
              <div className="xb-item--holder ul_li">
                <div className="xb-item--icon">{social.icon}</div>
                <span className="xb-item--name">{social.name}</span>
              </div>

              <span className="xb-item--arrow">
                <ArrowIcon />
              </span>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="xb-overlay"
              ></a>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="xb-footer-bottom">
          <div className="contact-item">
            <Image src={locationIcon} alt="location" />
            <span className="contact-method">4517 Washington, USA</span>
          </div>

          <div className="contact-item copyright-item">
            <p>
              Copyright © 2025{" "}
              <Link href="/">Aivora</Link>, All rights reserved.
            </p>
          </div>

          <div className="contact-item">
            <a href="tel:+112304528597">
              <Image src={callIcon} alt="call" />
            </a>
            <a className="contact-method" href="tel:+112304528597">
              +(1) 1230 452 8597
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
