import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ConstructionIcon from "@mui/icons-material/Construction";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import "./services.css";

const Services = () => {
  return (
    <div className="services">
      <h3 className="services__header" data-aos="zoom-in" data-aos-once="true">
        Services
      </h3>

      <div className="services-container grid grid-3x2">
        <div className="service-card" data-aos="fade-up">
          <span className="service-icon">
            <HomeWorkIcon fontSize="inherit" />
          </span>
          <h5 className="service-card__caption">Construction</h5>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span className="service-icon">
            <ConstructionIcon fontSize="inherit" />
          </span>
          <h5 className="service-card__caption">Renovation</h5>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span className="service-icon">
            <Diversity3Icon fontSize="inherit" />
          </span>
          <h5 className="service-card__caption">Consultation</h5>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span className="service-icon">
            <HomeRepairServiceIcon fontSize="inherit" />
          </span>
          <h5 className="service-card__caption">Repair Services</h5>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span className="service-icon">
            <ArchitectureIcon fontSize="inherit" />
          </span>
          <h5 className="service-card__caption">Architecture</h5>
        </div>

        <div className="service-card" data-aos="fade-up">
          <span className="service-icon">
            <TipsAndUpdatesIcon fontSize="inherit" />
          </span>
          <h5 className="service-card__caption">Electric</h5>
        </div>
      </div>
    </div>
  );
};

export default Services;
