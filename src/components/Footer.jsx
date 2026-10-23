import { Link, useLocation } from "react-router-dom";
import { FiMail, FiMapPin, FiGlobe, FiArrowRight, FiArrowUp, FiHeadphones, FiUsers, FiSend } from "react-icons/fi";
import { brand, navLinks, coins } from "../data/siteData.js";
import "../style/footer.css";

export default function Footer() {
  const { pathname } = useLocation();
  // pages that already end with their own call-to-action skip the footer banner
  const showCta = !["/", "/about", "/login", "/register", "/forgot-password"].includes(pathname);
  const top = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="sw-foot">
      <span className="sw-foot__word" aria-hidden="true">{brand.name}</span>
      {showCta && (
      <div className="sw-foot__cta">
        <div>
          <h3>Ready to start staking?</h3>
          <p>Create your BENWINK account in a few easy steps and choose your first asset.</p>
        </div>
        <div className="sw-foot__ctabtns">
          <Link to="/register" className="bw-btn sw-foot__light">Register <FiArrowRight /></Link>
          <Link to="/login" className="bw-btn sw-foot__line">Login</Link>
        </div>
      </div>
      )}

      <div className="sw-foot__in">
        <div className="sw-foot__brand">
          <span className="sw-foot__logo"><img src={brand.logo} alt={brand.name} /></span>
          <p>{brand.tagline} Stake Solana, BNB and ZMAX on one secure, transparent platform.</p>
          <p className="sw-foot__line2"><FiMapPin /> {brand.address}</p>
          <p className="sw-foot__line2"><FiGlobe /> <a href={`https://${brand.website}`}>{brand.website}</a></p>
          {brand.email && <a className="sw-foot__mail" href={`mailto:${brand.email}`}><FiMail /> {brand.email}</a>}
          <ul className="sw-foot__badges">
            <li><FiHeadphones /> Mail support 24/7</li>
            <li><FiUsers /> Referral Program</li>
            <li><FiSend /> Trust wallet transfers</li>
          </ul>
        </div>

        <nav className="sw-foot__col" aria-label="Explore">
          <h4>Explore</h4>
          <ul>{navLinks.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
        </nav>

        <nav className="sw-foot__col" aria-label="Account">
          <h4>Your Account</h4>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/forgot-password">Forgot password</Link></li>
          </ul>
        </nav>

        <div className="sw-foot__col">
          <h4>Coins</h4>
          <ul className="sw-foot__coins">
            {coins.map((c) => <li key={c.id}><Link to={`/markets/${c.id}`}>{c.symbol}</Link></li>)}
          </ul>
          <Link to="/markets" className="sw-foot__more">View markets <FiArrowRight /></Link>
        </div>
      </div>

      <p className="sw-foot__risk">
        Risk notice: cryptocurrency prices are volatile and you may lose some or all of your capital. Price predictions are third-party estimates, not promises. Please read all plan terms before staking.
      </p>
      <div className="sw-foot__bar">
        <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
        <button type="button" className="sw-foot__top" onClick={top} aria-label="Back to top"><FiArrowUp /></button>
      </div>
    </footer>
  );
}
