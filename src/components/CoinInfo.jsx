import PlanTable from "./PlanTable.jsx";
import Reveal from "./Reveal.jsx";
import { benefits } from "../data/siteData.js";

export default function CoinInfo({ coin }) {
  return (
    <>
      <Reveal className="bw-forecast">
        <h2>{coin.forecastTitle}</h2>
        {coin.live && <p className="bw-live">Current live price: <b>{coin.live}</b></p>}
        {coin.forecast.map((t, i) => <p key={i}>{t}</p>)}
      </Reveal>
      <Reveal className="bw-plans" delay={80}>
        <h3>Business format</h3>
        <PlanTable coin={coin} />
      </Reveal>
      <Reveal className="bw-benefits" delay={120}>
        <h3>Income &amp; benefits</h3>
        <ul>{benefits.map((b) => <li key={b}>{b}</li>)}</ul>
        <p className="bw-note">Plan terms are shown as supplied by the platform. Returns depend on market conditions and are not assured.</p>
      </Reveal>
    </>
  );
}
