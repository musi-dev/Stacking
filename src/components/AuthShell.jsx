import { FiCheckCircle, FiLock } from "react-icons/fi";
import LottiePlayer from "./LottiePlayer.jsx";
import { brand, highlights } from "../data/siteData.js";
import "../style/auth.css";

// `anim` (optional): a Lottie JSON shown at the top of the left panel (used on Login).
export default function AuthShell({ title, subtitle, children, footer, anim, eyebrow }) {
  return (
    <section className="au">
      <aside className="au__side">
        {anim && (
          <div className="au__anim">
            <LottiePlayer data={anim} label="Secure login animation" />
          </div>
        )}
        {eyebrow && <span className="au__badge"><FiLock /> {eyebrow}</span>}
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
