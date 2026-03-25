import { useEffect, useState } from "react";
import "./css/HeroSlider.css";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={i === index ? "active" : ""}
          alt=""
        />
      ))}

      {/* Arrows */}
      <button className="left" onClick={() => setIndex(index - 1)}>
        ❮
      </button>
      <button className="right" onClick={() => setIndex(index + 1)}>
        ❯
      </button>
    </div>
  );
}