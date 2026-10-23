import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiHeadphones, FiUsers, FiSend } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import CoinCard from "../components/CoinCard.jsx";
import { img, stats, highlights, steps, why, coins, features, whatIs, community, referral, benefits } from "../data/siteData.js";
import "../style/coin.css";
import "../style/home.css";

const icons = { care: <FiHeadphones />, ref: <FiUsers />, transfer: <FiSend /> };

export default function Home() {
  const today = coins[new Date().getDate() % coins.length];
  return (
    <>
      <section className="hm-hero">
        <div className="hm-hero__card">
          <p className="hm-kicker">Crypto staking platform</p>
          <div className="hm-hero__top">
            <h1>
              Stake Smarter.
              <span><img src={img.coins} alt="" />Grow Your Crypto.</span>
            </h1>
            <div className="hm-hero__side">
              <div className="hm-hero__btns">
                <Link to="/register" className="bw-btn bw-btn--dark">Start Staking</Link>
                <Link to="/markets" className="bw-btn bw-btn--ghost">Explore Markets</Link>
              </div>
              <p>Stake Solana, BNB and ZMAX with BENWINK and unlock rewarding opportunities in a secure, transparent and user-friendly platform.</p>
            </div>
          </div>
          <div className="hm-hero__img">
            <img src={img.hero} alt="Crypto staking" />
            <ul>{highlights.map((h) => <li key={h}><FiCheckCircle /> {h}</li>)}</ul>
          </div>
        </div>
      </section>

      <Reveal as="section" className="hm-stats">
        {stats.map((s) => <div key={s.l}><b>{s.v}</b><span>{s.l}</span></div>)}
      </Reveal>

      <section className="hm-feats">
        {features.map((f, i) => (
          <Reveal as="article" key={f.t} className="hm-feat" delay={i * 90}>
            <span className="hm-feat__ic">{icons[f.icon]}</span>
            <h3>{f.t}</h3>
            <p>{f.d}</p>
            <Link to={f.to}>{f.cta} <FiArrowRight /></Link>
          </Reveal>
        ))}
      </section>

      <Reveal as="section" className="hm-intro">
        <span className="hm-ghost" aria-hidden="true">STAKING</span>
        {/* <p className="hm-kicker">A clearer way forward</p> */}
        <p className="hm-intro__text">
          Staking lets you put your crypto to work. Instead of leaving coins idle, you lock them in
          a network or plan and receive rewards over time. BENWINK brings Solana, BNB and ZMAX
          together in one place, with clear plan tables, simple steps and a team you can reach.
        </p>
      </Reveal>

      <Reveal as="section" className="hm-split">
        <div>
          <p className="hm-kicker">About us</p>
          <h2>Built in Malta, open to stakers worldwide.</h2>
          <p>BENWINK is a staking platform based at Edge Water Business Complex in Giljan, Malta. We focus on three assets and explain each one before you commit.</p>
          <p>{whatIs[0]}</p>
          <Link to="/about" className="bw-btn bw-btn--dark">About BENWINK <FiArrowRight /></Link>
        </div>
        <img src={img.team} alt="BENWINK team" loading="lazy" />
      </Reveal>

      <section className="hm-why">
        <Reveal className="hm-head">
          <p className="hm-kicker">Why choose BENWINK?</p>
          <h2>A Smarter <em>Way to Stake.</em></h2>
          <p>Built for security, transparency and a better staking experience.</p>
        </Reveal>
        <div className="hm-why__grid">
          {why.slice(0, 4).map((w, i) => (
            <Reveal key={w.t} className="hm-why__item" delay={i * 90}>
              <img src={w.img} alt={w.t} loading="lazy" />
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="hm-today">
        <img src={today.img} alt={today.name} loading="lazy" />
        <div>
          <p className="hm-kicker">Coin of the day</p>
          <h2>{today.name} ({today.symbol})</h2>
          <p>{today.days}</p>
          <Link to={`/markets/${today.id}`} className="bw-btn bw-btn--dark">Read more <FiArrowRight /></Link>
        </div>
      </Reveal>

      <section className="hm-options">
        <Reveal className="hm-head">
          <p className="hm-kicker">Staking Options</p>
          <h2>Choose your asset, stake with ease, and start earning rewards.</h2>
        </Reveal>
        <div className="bw-coins">
          {coins.map((c, i) => <CoinCard key={c.id} coin={c} delay={i * 100} />)}
        </div>
      </section>

      <section className="hm-comm">
        <Reveal className="hm-head">
          <p className="hm-kicker">{community.head}</p>
          <h2>{community.sub}</h2>
        </Reveal>
        <div className="hm-comm__grid">
          {community.items.map((c, i) => (
            <Reveal key={c.n} className="hm-comm__item" delay={i * 90}>
              <b>{c.n}</b>
              <h3>{c.t}</h3>
              <p>{c.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal as="section" className="hm-ref">
        <div className="hm-ref__main">
          <p className="hm-kicker">{referral.head}</p>
          <h2>{referral.sub}</h2>
          {referral.items.map((r) => (
            <div key={r.t} className="hm-ref__item"><h3>{r.t}</h3><p>{r.d}</p></div>
          ))}
          <Link to="/register" className="bw-btn bw-btn--dark">Register &amp; Refer <FiArrowRight /></Link>
        </div>
        <ul className="hm-ref__list">
          {benefits.slice(0, 3).map((b) => <li key={b}><FiCheckCircle /> {b}</li>)}
        </ul>
      </Reveal>

      <Reveal as="section" className="hm-steps hm-steps--four">
        <div className="hm-steps__head">
          <p>Your Investments</p>
          <h2>Get started in <em>a few minutes.</em></h2>
        </div>
        <div className="hm-steps__grid">
          {steps.map((s, i) => (
            <div key={s.t} className="hm-step">
              <small>Step {i + 1}</small>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="hm-cta">
        <h2>Ready to begin?</h2>
        <p>Create your account and choose your first asset.</p>
        <div className="hm-hero__btns">
          <Link to="/register" className="bw-btn bw-btn--dark">Register</Link>
          <Link to="/login" className="bw-btn bw-btn--ghost">Login</Link>
        </div>
      </Reveal>
    </>
  );
}
