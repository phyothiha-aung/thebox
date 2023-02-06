import "./callout.css";

const Callout = () => {
  return (
    <div className="callout" data-aos="zoom-in">
      <div>
        <h3 className="callout__title">
          Free consultation with exceptional quality
        </h3>
        <p className="callout__text">Just one call away: +959 785 800 580</p>
      </div>
      <div>
        <button className="callout__button">Get Your Consultaion</button>
      </div>
    </div>
  );
};

export default Callout;
