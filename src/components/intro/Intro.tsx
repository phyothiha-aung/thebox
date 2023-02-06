import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-half intro-left">
        <h1 className="intro-heading" data-aos="fade-right">
          Building things is our mission.
        </h1>
      </div>
      <div className="intro-half">
        <div className="intro-box-container" data-aos="fade-down">
          <div className="intro-box">
            <h6 className="intro-box__header">Feature Projects</h6>
            <p className="intro-box__text">
              The National University of Architecture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
