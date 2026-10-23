import { Link, useParams } from "react-router-dom";
import CoinInfo from "../components/CoinInfo.jsx";
import { coins } from "../data/siteData.js";
import "../style/coin.css";
import "../style/markets.css";

export default function CoinDetail() {
  const { id } = useParams();
  const coin = coins.find((c) => c.id === id) || coins[0];
  return (
    <>
      <section className="mk-hero cd-hero">
        <div>
          <p className="hm-kicker">{coin.name} ({coin.symbol})</p>
          <h1>{coin.intro}</h1>
          <p>{coin.days}</p>
          <strong>APY up to {coin.apy}</strong>
          <div className="cd-btns">
            <Link to="/register" className="bw-btn bw-btn--dark">Stake {coin.symbol}</Link>
            <Link to="/markets" className="bw-btn bw-btn--ghost">All markets</Link>
          </div>
        </div>
        <img src={coin.img} alt={coin.name} />
      </section>
      <section className="mk-detail"><CoinInfo coin={coin} /></section>
    </>
  );
}
