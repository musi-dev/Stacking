import { FiCheckCircle } from "react-icons/fi";
import { brand, highlights } from "../data/siteData.js";
import "../style/auth.css";

export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <section className="au">
      <aside className="au__side">
        {/* <span className="au__logo"><img src={brand.logo} alt={brand.name} /></span> */}
        <h2>Stake Smarter. <em>Grow Your Crypto.</em></h2>
        <p>Stake Solana, BNB and ZMAX with {brand.name} in a secure, transparent and user-friendly platform.</p>
        <ul>
          {highlights.map((h) => <li key={h}><FiCheckCircle /> {h}</li>)}
        </ul>
      </aside>
      <div className="au__card">
        <h1>{title}</h1>
        <p className="au__sub">{subtitle}</p>
        {children}
        {footer && <small className="au__foot">{footer}</small>}
      </div>
    </section>
  );
}
