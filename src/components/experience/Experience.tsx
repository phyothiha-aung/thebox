import exp from "../../assets/images/experience.png";
import "./experience.css";
const Experience = () => {
  return (
    <div className="experience grid grid-1x2">
      <div className="experience__image-container" data-aos="flip-right">
        <img src={exp} alt="experience" />
      </div>
      <div>
        <div className="experience__text" data-aos="flip-left">
          <h1 className="experience__header">30 Years Experience</h1>
          <p>
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
