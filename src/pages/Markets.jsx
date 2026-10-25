import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import CoinCard from "../components/CoinCard.jsx";
import CoinInfo from "../components/CoinInfo.jsx";
import { coins, metals } from "../data/siteData.js";
import "../style/coin.css";
import "../style/markets.css";

const tabs = [...coins, ...metals];

export default function Markets() {
  const [id, setId] = useState(tabs[0].id);
  const item = tabs.find((c) => c.id === id);
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
          {tabs.map((c) => (
            <button key={c.id} role="tab" aria-selected={c.id === id} className={c.id === id ? "on" : ""} onClick={() => setId(c.id)}>
              {c.symbol}
            </button>
          ))}
        </div>
        <CoinInfo key={item.id} coin={item} />
      </section>
    </>
  );
}
