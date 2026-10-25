import Lottie from "lottie-react";

// Thin wrapper so every animation respects reduced-motion settings.
export default function LottiePlayer({ data, className = "", label = "", loop = true }) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <div className={`bw-lottie ${className}`} role="img" aria-label={label} aria-hidden={label ? undefined : true}>
      <Lottie animationData={data} loop={loop} autoplay={!reduce} />
    </div>
  );
}
