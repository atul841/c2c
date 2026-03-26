import "../css/stats.css";
import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [start, setStart] = useState(false);
  const sectionRef = useRef();

  const stats = [
    { value: 100, suffix: "%", label: "Client Centric" },
    { value: 5, suffix: "+", label: "Years Experience" },
    { value: 92, suffix: "%", label: "Creative Design" },
    { value: 78, suffix: "%", label: "Returning Clients" },
  ];

  // 👇 Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="stats" ref={sectionRef}>
      {stats.map((item, i) => (
        <Counter key={i} end={item.value} suffix={item.suffix} label={item.label} start={start} />
      ))}
    </section>
  );
}

/* 🔢 Counter Component */
function Counter({ end, suffix, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / 50;

    const interval = setInterval(() => {
      current += increment;

      if (current >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [start, end]);

  return (
    <div className="stat-box">
      <h1>{count}{suffix}</h1>
      <p>{label}</p>
    </div>
  );
}