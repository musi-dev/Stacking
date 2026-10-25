import { Link } from "react-router-dom";
import { FiCheckCircle, FiUserPlus, FiLayers, FiGift, FiAward, FiArrowRight } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import SafeImg from "../components/SafeImg.jsx";
import { img, stats, why, brand, trust, involved, howItWorks, whatIs, team } from "../data/siteData.js";
import "../style/home.css";
import "../style/about.css";

const howIcons = [<FiUserPlus />, <FiLayers />, <FiGift />, <FiAward />];

export default function About() {
  return (
    <>
      <section className="ab-hero">
        <Reveal>
          <p className="hm-kicker">About BENWINK</p>
          <h1>Staking, explained <em>before you commit.</em></h1>
          <p>BENWINK helps people stake Solana, BNB and ZMAX on one platform, with every plan laid out in a table you can read in a minute.</p>
        </Reveal>
        <img src="/assets/real1.png" alt="Dashboard" />+
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
      {/* TEAM: right after "Who we are" */}
      <section className="ab-team">
        <Reveal className="ab-team__head">
          <p className="hm-kicker">Our team</p>
          <h2>The people behind <em>BENWINK</em></h2>
        </Reveal>
        <div className="ab-team__grid">
          {team.map((m, i) => (
            <Reveal key={m.img} className="ab-person" delay={i * 90}>
              <div className="ab-person__pic">
                <SafeImg src={m.img} alt={m.name} loading="lazy" />
                <div className="ab-person__tag">
                  <b>{m.role}</b>
                  <span>{m.note}</span>
                </div>
              </div>
              <h3>{m.name}</h3>
            </Reveal>
          ))}
        </div>
      </section>
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
        <ol className="ab-how__grid ab-pg" >
          {howItWorks.items.map((w, i) => (
            <Reveal as="li" key={w.t} className="ab-step" delay={i * 90}>
              <div className="ab-step__pic">
                <SafeImg src={w.img} alt={w.t} loading="lazy" />
                <span className="ab-step__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="ab-step__ic">{howIcons[i]}</span>
              </div>
              <div className="ab-step__txt">
                <h3>{w.t}</h3>
                <p>{w.d}</p> 
              </div>
              {/* {i < howItWorks.items.length - 1 && <FiArrowRight className="ab-step__arrow" aria-hidden="true" />} */}
            </Reveal>
          ))}
        </ol>
      </section>
      <Reveal as="section" className="hm-cta">
        <h2>Join BENWINK today</h2>
        <p>Register in a few easy steps.</p>
        <div className="hm-hero__btns"><Link to="/register" className="bw-btn bw-btn--dark">Register</Link></div>
      </Reveal>
    </>
  );
}
