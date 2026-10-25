import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiHeadphones, FiUsers, FiSend, FiPlus, FiMinus, FiShield, FiBarChart2 } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import CoinCard from "../components/CoinCard.jsx";
import LottiePlayer from "../components/LottiePlayer.jsx";
import cryptoAnim from "../lottie/crypto.json";
import loanAnim from "../lottie/Loan Green.json";
import shareAnim from "../lottie/share with friends.json";
import questionAnim from "../lottie/Question.json";
import {
  img, heroBg, stats, highlights, steps, why, coins, features, whatIs, community,
  referral, benefits, businessFormat, faqs,
} from "../data/siteData.js";
import "../style/coin.css";
import "../style/home.css";

const icons = { care: <FiHeadphones />, ref: <FiUsers />, transfer: <FiSend /> };

function Faq({ q, a, open, onToggle }) {
  return (
    <div className={`hm-faq__item ${open ? "is-open" : ""}`}>
      <button type="button" aria-expanded={open} onClick={onToggle}>
        <span>{q}</span>
        {open ? <FiMinus /> : <FiPlus />}
      </button>
      {open && <p>{a}</p>}
    </div>
  );
}

export default function Home() {
  const today = coins[new Date().getDate() % coins.length];
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* HERO: full-page image behind the headline */}
      <section className="hm-banner" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hm-banner__shade" aria-hidden="true" />
        <div className="hm-banner__wrap">
          <div className="hm-banner__in">
            <p className="hm-banner__kicker"><FiBarChart2 /> Crypto staking platform</p>
            <h1>
              <span>STAKE</span>
              <span className="hm-banner__2">SMARTER</span>
            </h1>
           
            <div className="hm-banner__btns">
              <Link to="/register" className="bw-btn hm-banner__go">Start Staking <FiArrowRight /></Link>
              <Link to="/markets" className="bw-btn hm-banner__line">Explore Markets</Link>
            </div>
          </div>
          <div className="hm-banner__foot">
            <div className="hm-banner__stat">
              <b>{stats[0].v}</b>
              <span>{stats[0].l}</span>
            </div>
            <ul className="hm-banner__chips">{highlights.map((h) => <li key={h}><FiCheckCircle /> {h}</li>)}</ul>
          </div>
        </div>
      </section>

      {/* STATS */}
      <Reveal as="section" className="hm-stats">
        {stats.map((s) => <div key={s.l}><b>{s.v}</b><span>{s.l}</span></div>)}
      </Reveal>

      {/* FEATURES */}
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

      {/* WHAT IS STAKING  +  crypto animation */}
      <Reveal as="section" className="hm-intro">
        <div className="hm-intro__anim">
          <span className="hm-intro__glow" aria-hidden="true" />
          <LottiePlayer data={cryptoAnim} label="Animated crypto coins" />
        </div>
        <div className="hm-intro__copy">
          <p className="hm-kicker">What is staking?</p>
          <h2>Put your crypto <em>to work.</em></h2>
          <p className="hm-intro__text">
            Instead of leaving coins idle, you lock them in a network or plan and receive rewards
            over time. BENWINK brings Solana, BNB and ZMAX together in one place, with clear plan
            tables, simple steps and a team you can reach.
          </p>
          <ul className="hm-intro__pts">
            <li><FiShield /> Every plan explained before you commit</li>
            <li><FiBarChart2 /> Monthly bonus and maturity shown up front</li>
            <li><FiHeadphones /> Mail support 24/7</li>
          </ul>
          <Link to="/markets" className="bw-btn bw-btn--dark">See staking plans <FiArrowRight /></Link>
        </div>
      </Reveal>

      {/* ABOUT */}
      <Reveal as="section" className="hm-split">
        <div>
          <p className="hm-kicker">About us</p>
          <h2>Built in Malta, open to stakers worldwide.</h2>
          <p>BENWINK is a staking platform based at Edge Water Business Complex in Giljan, Malta. We focus on three assets and explain each one before you commit.</p>
          <p>{whatIs[0]}</p>
          <Link to="/about" className="bw-btn bw-btn--dark">About BENWINK <FiArrowRight /></Link>
        </div>
        <div className="hm-split__media">
          <img src="/assets/ab1.jpg" alt="BENWINK team" loading="lazy" />
          <div className="hm-split__badge"><b>3</b><span>assets, one platform</span></div>
        </div>
      </Reveal>

      {/* WHY */}
      <section className="hm-why">
        <Reveal className="hm-head hm-head--center">
          <p className="hm-kicker">Why choose BENWINK?</p>
          <h2>A Smarter <em>Way to Stake.</em></h2>
          <p>Built for security, transparency and a better staking experience.</p>
        </Reveal>
        <div className="hm-why__grid">
          {why.slice(0, 4).map((w, i) => (
            <Reveal key={w.t} className="hm-why__item" delay={i * 90}>
              <img src={w.img} alt={w.t} loading="lazy" />
              <div>
                <span className="hm-why__no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{w.t}</h3>
                <p>{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* COIN OF THE DAY */}
      <Reveal as="section" className="hm-today">
        <img src={today.img} alt={today.name} loading="lazy" />
        <div>
          <p className="hm-kicker">Coin of the day</p>
          <h2>{today.name} ({today.symbol})</h2>
          <p>{today.days}</p>
          <div className="hm-today__meta">
            <span>APY up to <b>{today.apy}</b></span>
            <span>Plan <b>24 Months</b></span>
          </div>
          <Link to={`/markets/${today.id}`} className="bw-btn bw-btn--dark">Read more <FiArrowRight /></Link>
        </div>
      </Reveal>

      {/* STAKING OPTIONS (assets) */}
      <section className="hm-options">
        <Reveal className="hm-head hm-head--center">
          <p className="hm-kicker">Staking Options</p>
          <h2>Choose your asset, stake with ease, and start earning rewards.</h2>
        </Reveal>
        <div className="bw-coins">
          {coins.map((c, i) => <CoinCard key={c.id} coin={c} delay={i * 100} />)}
        </div>
      </section>

      {/* BUSINESS FORMAT — directly below the assets, with the loan animation */}
      <section className="hm-biz" id="business-format">
        <Reveal className="hm-biz__top">
          <div className="hm-biz__copy">
            <p className="hm-kicker">{businessFormat.head}</p>
            <h2>{businessFormat.sub}</h2>
            <p>{businessFormat.text}</p>
            <div className="hm-biz__facts">
              {businessFormat.facts.map((f) => (
                <div key={f.l}><span>{f.l}</span><b>{f.v}</b></div>
              ))}
            </div>
          </div>
          <div className="hm-biz__anim">
            <LottiePlayer data={loanAnim} label="Animated plan returns illustration" />
          </div>
        </Reveal>

        <div className="hm-biz__grid">
          {businessFormat.items.map((b, i) => (
            <Reveal key={b.t} className="hm-biz__card" delay={i * 90}>
              <b className="hm-biz__v">{b.v}</b>
              <h3>{b.t}</h3>
              <p>{b.d}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="hm-biz__foot">
          <p>Plan figures are set by each plan's terms. Please read them in full before staking.</p>
          <Link to="/markets" className="bw-btn bw-btn--dark">View plan tables <FiArrowRight /></Link>
        </Reveal>
      </section>

      {/* COMMUNITY */}
      <section className="hm-comm">
        <Reveal className="hm-head hm-head--center">
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

      {/* REFERRAL: text left, share animation right */}
      <Reveal as="section" className="hm-ref">
        <div className="hm-ref__main">
          <p className="hm-kicker">{referral.head}</p>
          <h2>{referral.sub}</h2>
          {referral.items.map((r) => (
            <div key={r.t} className="hm-ref__item"><h3>{r.t}</h3><p>{r.d}</p></div>
          ))}
          <Link to="/register" className="bw-btn bw-btn--dark">Register &amp; Refer <FiArrowRight /></Link>
        </div>
        <div className="hm-ref__anim">
          <span className="hm-intro__glow" aria-hidden="true" />
          <LottiePlayer data={shareAnim} label="Share with friends animation" />
        </div>
      </Reveal>

      {/* STEPS: dark + orange timeline, same palette as the footer */}
      <Reveal as="section" className="hm-tl">
        <div className="hm-tl__head">
          <p className="hm-tl__kicker">Your Investments</p>
          <h2>Get started in <em>a few minutes.</em></h2>
          <p>Four simple steps from sign-up to your first plan.</p>
          <Link to="/register" className="bw-btn hm-tl__btn">Create account <FiArrowRight /></Link>
        </div>
        <ol className="hm-tl__list">
          {steps.map((s, i) => (
            <li key={s.t} className={`hm-tl__item hm-tl__item--${i + 1}`}>
              <span className="hm-tl__pic"><img src={s.img} alt="" loading="lazy" /></span>
              <span className="hm-tl__badge"><small>STEP</small>{String(i + 1).padStart(2, "0")}</span>
              <div className="hm-tl__txt">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* FAQ */}
      <section className="hm-faq">
        <Reveal className="hm-faq__head">
          <p className="hm-kicker">FAQs</p>
          <h2>Quick answers <em>before you start.</em></h2>
          <p>Can't find what you need? Our team replies by mail, 24/7.</p>
          <Link to="/support" className="bw-btn bw-btn--ghost">Contact support <FiArrowRight /></Link>
          <div className="hm-faq__anim">
            <LottiePlayer data={questionAnim} label="Frequently asked questions animation" />
          </div>
        </Reveal>
        <Reveal className="hm-faq__list" delay={100}>
          {faqs.slice(0, 5).map((f, i) => (
            <Faq key={f.q} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <Reveal as="section" className="hm-cta">
        <h2>Ready to begin?</h2>
        <p>Create your account and choose your first asset.</p>
        <div className="hm-hero__btns">
          <Link to="/register" className="bw-btn hm-cta__light">Register</Link>
          <Link to="/login" className="bw-btn hm-cta__line">Login</Link>
        </div>
      </Reveal>
    </>
  );
}
