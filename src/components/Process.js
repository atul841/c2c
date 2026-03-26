import "../css/Process.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Process() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const data = [
    {
      number: "01",
      title: "Analytical Excellence",
      desc: "Thoroughly understand client needs and analyze every detail using advanced tools."
    },
    {
      number: "02",
      title: "Innovative Design",
      desc: "Focus on functionality, sustainability, and smart tools to create inspiring designs."
    },
    {
      number: "03",
      title: "Execution",
      desc: "Follow a structured process with seamless coordination and timely delivery."
    }
  ];

  return (
    <section className="process">

      <div className="process-header" data-aos="fade-up">
        <span className="tag">THE PROCESS</span>
        <h2>Our Approach</h2>
      </div>

      <div className="process-grid">
        {data.map((item, i) => (
          <div className="process-card" key={i} data-aos="zoom-in" data-aos-delay={i * 200}>
            
            <h1 className="number">{item.number}</h1>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}