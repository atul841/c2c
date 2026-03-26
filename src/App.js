import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Process from "./components/Process";
import Stats from "./components/Stats";
import Services from "./components/Services";
// import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Stats />
      <Services />
      {/* <WhyChoose /> */}
    </>
  );
}

export default App;