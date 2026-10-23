import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import CoinCard from "../components/CoinCard.jsx";
import CoinInfo from "../components/CoinInfo.jsx";
import { coins } from "../data/siteData.js";
import "../style/coin.css";
import "../style/markets.css";

export default function Markets() {
  const [id, setId] = useState(coins[0].id);
  const coin = coins.find((c) => c.id === id);
  return (
    <>
      <section className="mk-hero">
        <Reveal>
          <p className="hm-kicker">Markets</p>
          <h1>Three assets. <em>One clear plan each.</em></h1>
        </Reveal>
      </section>
      <section className="mk-grid bw-coins">
        {coins.map((c, i) => <CoinCard key={c.id} coin={c} delay={i * 90} />)}
      </section>
      <section className="mk-detail">
        <div className="mk-tabs" role="tablist">
          {coins.map((c) => (
            <button key={c.id} role="tab" aria-selected={c.id === id} className={c.id === id ? "on" : ""} onClick={() => setId(c.id)}>
              {c.symbol}
            </button>
          ))}
        </div>
        <CoinInfo key={coin.id} coin={coin} />
        <Link to={`/markets/${coin.id}`} className="bw-btn bw-btn--dark">Open {coin.symbol} page</Link>
      </section>
    </>
  );
}
