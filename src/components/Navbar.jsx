import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiLogIn, FiUserPlus } from "react-icons/fi";
import { navLinks, brand } from "../data/siteData.js";
import "../style/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const close = () => setOpen(false);

  // Solid bar after scrolling; glass bar over the home hero at the top.
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  // Stop the page scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const overHero = pathname === "/" && !scrolled && !open;

  return (
    <header className={`bw-nav ${overHero ? "bw-nav--top" : ""} ${scrolled ? "is-scrolled" : ""}`}>
      <div className="bw-nav__bar">
        <Link to="/" className="bw-nav__logo" onClick={close} aria-label={`${brand.name} home`}>
          <img src="/assets/logo.jpeg" alt="" className="nav_logo" />
          <span>BENWINK</span>
        </Link>
        <nav className={`bw-nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={close}>{l.label}</NavLink>
          ))}
          <div className="bw-nav__auth">
            <Link to="/login" className="bw-btn bw-btn--ghost" onClick={close}><FiLogIn /> Login</Link>
            <Link to="/register" className="bw-btn bw-btn--dark" onClick={close}><FiUserPlus /> Register</Link>
          </div>
        </nav>
        <button className="bw-nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
      {open && <button className="bw-nav__scrim" aria-label="Close menu" onClick={close} />}
    </header>
  );
}
