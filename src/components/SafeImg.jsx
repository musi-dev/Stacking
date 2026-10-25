import { useState } from "react";

// Image that falls back to a soft tinted block (with the alt text) if the file is missing.
export default function SafeImg({ src, alt, className = "", ...rest }) {
  const [bad, setBad] = useState(false);
  if (bad) {
    return (
      <div className={`bw-imgfallback ${className}`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }
  return <img src={src} alt={alt} className={className} onError={() => setBad(true)} {...rest} />;
}
