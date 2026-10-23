import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Reveal from "./Reveal.jsx";

export default function CoinCard({ coin, delay = 0 }) {
  return (
    <Reveal as="article" className="bw-coin" delay={delay}>
      <img src={coin.img} alt={`${coin.name} staking`} loading="lazy" />
      <div className="bw-coin__body">
        <h3>{coin.name} ({coin.symbol})</h3>
        <p>{coin.intro}</p>
        <strong>APY up to {coin.apy}</strong>
        <Link to={`/markets/${coin.id}`} className="bw-btn bw-btn--dark">Stake {coin.symbol} <FiArrowRight /></Link>
      </div>
    </Reveal>
  );
}
