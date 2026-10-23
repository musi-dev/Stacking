import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import { img, stats, why, brand, trust, involved, howItWorks, whatIs } from "../data/siteData.js";
import "../style/home.css";
import "../style/about.css";

export default function About() {
  return (
    <>
      <section className="ab-hero">
        <Reveal>
          <p className="hm-kicker">About BENWINK</p>
          <h1>Staking, explained <em>before you commit.</em></h1>
          <p>BENWINK helps people stake Solana, BNB and ZMAX on one platform, with every plan laid out in a table you can read in a minute.</p>
        </Reveal>
        <img src={img.dash} alt="Dashboard" />
      </section>
      <Reveal as="section" className="ab-stats">
        {stats.map((s) => <div key={s.l}><b>{s.v}</b><span>{s.l}</span></div>)}
      </Reveal>
      <Reveal as="section" className="ab-story">
        <img src={img.meeting} alt="Our team at work" loading="lazy" />
        <div>
          <h2>Who we are</h2>
          <p>We are a team based in Malta who believe staking should be simple. We share the coin background, the plan terms and the price forecasts in plain language, so you decide with full information.</p>
          {whatIs.map((t, i) => <p key={i}>{t}</p>)}
          <p>{brand.address}</p>
        </div>
      </Reveal>
      <Reveal as="section" className="ab-stats">
        {trust.map((s) => <div key={s.t}><b>{s.t}</b><span>{s.d}</span></div>)}
      </Reveal>
      <section className="ab-involved">
        <Reveal>
          <p className="hm-kicker">Get involved with the community</p>
          <h2>Built to be <em>comfy as home.</em></h2>
          <p>{involved.text}</p>
        </Reveal>
        <Reveal delay={100} as="ul">
          {involved.points.map((p) => <li key={p}><FiCheckCircle /> {p}</li>)}
        </Reveal>
      </section>
      <section className="ab-why">
        <Reveal><h2>Why us</h2></Reveal>
        <div>
          {why.map((w, i) => (
            <Reveal key={w.t} className="ab-why__item" delay={i * 80}>
              <h3>{w.t}</h3><p>{w.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="ab-how">
        <Reveal><h2>{howItWorks.head}</h2><p className="ab-sub">{howItWorks.sub}</p></Reveal>
        <div>
          {howItWorks.items.map((w, i) => (
            <Reveal key={w.t} className="ab-why__item" delay={i * 80}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              <h3>{w.t}</h3><p>{w.d}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal as="section" className="hm-cta">
        <h2>Join BENWINK today</h2>
        <p>Register in a few easy steps.</p>
        <div className="hm-hero__btns"><Link to="/register" className="bw-btn bw-btn--dark">Register</Link></div>
      </Reveal>
    </>
  );
}
