import { useEffect, useState } from "react";
import "../css/Hero.css";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3 sec auto slide

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      {/* <h1>Transforming Blueprint Into Reality</h1> */}
    </section>
  );
}