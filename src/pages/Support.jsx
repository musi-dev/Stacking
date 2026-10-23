import { useState } from "react";
import { FiPlus, FiMinus, FiMapPin, FiGlobe, FiMail, FiHeadphones } from "react-icons/fi";
import Reveal from "../components/Reveal.jsx";
import { faqs, brand, features } from "../data/siteData.js";
import "../style/support.css";

export default function Support() {
  const [open, setOpen] = useState(0);
  return (
    <>
      <section className="sp-hero">
        <Reveal><p className="hm-kicker">Support</p><h1>Answers, <em>and people to ask.</em></h1><p className="sp-lead">{features[0].d}</p></Reveal>
      </section>
      <section className="sp-body">
        <Reveal className="sp-faq">
          {faqs.map((f, i) => (
            <div key={f.q} className={`sp-item ${open === i ? "on" : ""}`}>
              <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                {f.q} {open === i ? <FiMinus /> : <FiPlus />}
              </button>
              {open === i && <p>{f.a}</p>}
            </div>
          ))}
        </Reveal>
        <Reveal className="sp-contact" delay={100}>
          <h3>Contact BENWINK</h3>
          <p><FiMapPin /> {brand.address}</p>
          <p><FiGlobe /> {brand.website}</p>
          <p><FiHeadphones /> Support through mail, 24/7.</p>
          {brand.email && <p><FiMail /> <a href={`mailto:${brand.email}`}>{brand.email}</a></p>}
        </Reveal>
      </section>
    </>
  );
}
