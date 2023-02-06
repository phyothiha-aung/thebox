import Intro from "./components/intro/Intro";
import Reputation from "./components/reputation/Reputation";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Callout from "./components/callout/Callout";
import Contact from "./components/contact/Contact";
import Copyright from "./components/Copyright/Copyright";
import Navbar from "./components/navbar/Navbar";
import * as AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <Navbar />
      <Intro />
      <Reputation />
      <About />
      <Services />
      <Experience />
      <Callout />
      <Contact />
      <Copyright />
    </div>
  );
};

export default App;
