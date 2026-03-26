import "../css/Services.css";

export default function Services() {

  const services = [
    {
      title: "Architecture",
      desc: "Designing timeless spaces that inspire, function, and elevate your lifestyle.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },
    {
      title: "Interior Designing",
      desc: "Transforming interiors into personalized spaces that feel like home.",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
    },
    {
      title: "BIM Solutions",
      desc: "Revolutionizing project planning with precise 3D modeling technology.",
      img: "https://images.unsplash.com/photo-1581090700227-4c4b9c5b6c89"
    },
    {
      title: "Construction",
      desc: "Building durable structures with quality care and timely execution.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd"
    },
    {
      title: "Structure",
      desc: "Strength and stability for buildings that stand the test of time.",
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
    },
    {
      title: "MEP Solutions",
      desc: "Integrated systems for seamless and sustainable performance.",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6b9b8c3d"
    }
  ];

  return (
    <section className="services">
      <h2>What we offer for you</h2>

      <div className="services-grid">
        {services.map((item, i) => (
          <div className="service-card" key={i}>
            
            <img src={item.img} alt="" />

            <div className="overlay"></div>

            <div className="content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>

            <div className="plus">+</div>

          </div>
        ))}
      </div>
    </section>
  );
}