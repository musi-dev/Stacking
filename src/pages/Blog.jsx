import Reveal from "../components/Reveal.jsx";
import { posts } from "../data/siteData.js";
import "../style/blog.css";

export default function Blog() {
  return (
    <>
      <section className="bl-hero">
        <Reveal><p className="hm-kicker">Blog</p><h1>Guides and <em>staking notes.</em></h1></Reveal>
      </section>
      <section className="bl-grid">
        {posts.map((p, i) => (
          <Reveal as="article" key={p.t} className="bl-card" delay={(i % 3) * 90}>
            <img src={p.img} alt={p.t} loading="lazy" />
            <small>{p.date}</small>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
