import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/images/theboxlogo.png";
import { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <nav
      className={`nav collapsible ${expanded ? "collapsible--expanded" : ""}`}
    >
      <a className="nav__brand" href="/">
        <img src={logo} alt="" />
      </a>
      <span className="nav__toggler">
        <MenuIcon
          onClick={toggleExpanded}
          color="primary"
          fontSize="large"
          className="icon"
        />
      </span>

      <ul className="list nav__list collapsible__content">
        <li className="nav__item">
          <a href="#">Home</a>
        </li>
        <li className="nav__item">
          <a href="#reputation">Reputation</a>
        </li>
        <li className="nav__item">
          <a href="#about">About</a>
        </li>
        <li className="nav__item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
