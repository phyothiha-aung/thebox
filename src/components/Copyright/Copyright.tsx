import logo from "../../assets/images/theboxlogo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./copyright.css";

const Copyright = () => {
  return (
    <div className="copyright">
      <img src={logo} alt="the box logo" />
      <span>The Box company &copy; 2020. All rights reserved</span>
      <div className="social-icon">
        <FacebookIcon
          fontSize="large"
          color="primary"
          sx={{ marginRight: "10px" }}
        />
        <LinkedInIcon
          fontSize="large"
          color="primary"
          sx={{ marginRight: "10px" }}
        />
        <TwitterIcon
          fontSize="large"
          color="primary"
          sx={{ marginRight: "10px" }}
        />
      </div>
    </div>
  );
};

export default Copyright;
