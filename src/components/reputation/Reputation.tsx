import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import GroupsIcon from "@mui/icons-material/Groups";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import "./reputation.css";

const Reputation = () => {
  return (
    <div className="reputation" id="reputation">
      <h2
        className="reputation__header"
        data-aos="zoom-in"
        data-aos-once="true"
      >
        Our Reputations
      </h2>
      <div className="cards-container">
        <div className="card" data-aos="fade-up" data-aos-once="true">
          <span className="icon">
            <HeadsetMicIcon fontSize="inherit" color="warning" />
          </span>
          <h6 className="card__header">Best Services</h6>
          <p className="card__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-once="true">
          <span className="icon">
            <GroupsIcon fontSize="inherit" color="warning" />
          </span>
          <h6 className="card__header">Best Teams</h6>
          <p className="card__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis.
          </p>
        </div>

        <div className="card" data-aos="fade-up" data-aos-once="true">
          <span className="icon">
            <DesignServicesIcon fontSize="inherit" color="warning" />
          </span>
          <h6 className="card__header">Best Designs</h6>
          <p className="card__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reputation;
