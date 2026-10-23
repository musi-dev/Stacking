import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, brand } from "../data/siteData.js";
import "../style/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="bw-nav">
      <div className="bw-nav__bar">
        <Link to="/" className="bw-nav__logo" onClick={close} aria-label={`${brand.name} home`}>
          <img src="/assets/logo.jpeg" alt={brand.name} className="nav_logo" /> BENWINK
        </Link>
        <nav className={`bw-nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={close}>{l.label}</NavLink>
          ))}
          <div className="bw-nav__auth">
            <Link to="/login" className="bw-btn bw-btn--ghost" onClick={close}>Login</Link>
            <Link to="/register" className="bw-btn bw-btn--dark" onClick={close}>Register</Link>
          </div>
        </nav>
        <button className="bw-nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
