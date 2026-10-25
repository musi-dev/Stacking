import { FiCheck } from "react-icons/fi";
import Reveal from "./Reveal.jsx";
import SafeImg from "./SafeImg.jsx";

// Point-by-point view used for crypto assets and for the gold / silver / platinum tabs.
export default function CoinInfo({ coin }) {
  return (
    <>
      <Reveal className="mi">
        <div className="mi__media">
          <SafeImg src={coin.img} alt={coin.name} loading="lazy" />
          {coin.live && <span className="mi__live">Live price <b>{coin.live}</b></span>}
          <div className="mi__cap">
            <b>{coin.name}</b>
            <span>{coin.intro}</span>
          </div>
        </div>

        <div className="mi__body">
          <p className="hm-kicker">{coin.kind === "metal" ? "Precious metal" : "Price outlook"}</p>
          <h2>{coin.forecastTitle}</h2>

          <div className="mi__stats">
            {coin.stats.map((s) => (
              <div key={s.l}><b>{s.v}</b><span>{s.l}</span></div>
            ))}
          </div>

          <ol className="mi__points">
            {coin.points.map((p, i) => (
              <li key={p.t}>
                <span className="mi__no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
                <FiCheck className="mi__tick" aria-hidden="true" />
              </li>
            ))}
          </ol>

          <p className="bw-note">Figures are third-party estimates and general information. They are not advice or a promise of returns.</p>
        </div>
      </Reveal>
    </>
  );
}
