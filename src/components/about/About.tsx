import whiteMale from "../../assets/images/whiteMale.jpg";
import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__image-container" data-aos="flip-left">
        <img src={whiteMale} alt="white male" />
      </div>
      <div>
        <div className="about-box">
          <h3 className="about__header">About Us</h3>
          <p>
            For more than 30 years we have been delivering world-class
            construction and we have built many lasting relationship along the
            way.
          </p>
          <p>
            We've matured into an industry leader and trusted resource for those
            seeking quality, innovation and reliability when building in the
            U.S.
          </p>
          <button>More on Our History</button>
        </div>
      </div>
    </div>
  );
};

export default About;
