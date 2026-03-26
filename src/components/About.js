import "../css/About.css";
import { useEffect } from "react";   // ✅ ye missing tha
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation speed
      once: true        // ek baar hi chale
    });
  }, []);

  return (
    <section className="about">
      
      <div className="about-left" data-aos="fade-right">
        <span className="tag">ABOUT US</span>

        <h1>
          We’re more than a design and construction company — 
          <span> we’re your creative partners!</span>
        </h1>

        <p>
          Our passionate team of architects, BIM specialists, construction experts, 
          and interior designers turn your dreams into reality.
        </p>

        <p>
          We offer personalized services to meet your unique needs, ensuring every 
          project is exceptional and future-ready.
        </p>

        <button className="about-btn">Learn More →</button>
      </div>

      <div className="about-right" data-aos="fade-left">
        <div className="overlay"></div>
      </div>

    </section>
  );
}