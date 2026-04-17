import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import megaMenu from "../assets/megamenu.png";
import {
  faBuilding,
  faCalendar,
  faChartBar,
  faCheckCircle,
  faClipboard,
  faComment,
  faPlayCircle,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faPercent, faServer } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink, UNSAFE_DataRouterContext } from "react-router-dom";


function Header() {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <a href="#" className="logo">
            Elzero
          </a>
          <ul className="main-nav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/articles">Article</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/feature">Features</NavLink>
            </li>
            <li>
              <a href="#">Other</a>
              {/* Start MegaMenu */}
              <div className="mega-menu">
                <div className="image">
                  <img src={megaMenu} alt="" />
                </div>
                <ul className="links">
                  <li>
                    <a href="#testimonials">
                      <FontAwesomeIcon icon={faComment} />
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#team">
                      <FontAwesomeIcon icon={faUser} />
                      Team Members
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <FontAwesomeIcon icon={faBuilding} />
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#our-skills">
                      <FontAwesomeIcon icon={faCheckCircle} />
                      Our Skills
                    </a>
                  </li>
                  <li>
                    <a href="#work-steps">
                      <FontAwesomeIcon icon={faClipboard} />
                      How It Works
                    </a>
                  </li>
                </ul>
                <ul className="links">
                  <li>
                    <a href="#event">
                      <FontAwesomeIcon icon={faCalendar} />
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#pricing">
                      <FontAwesomeIcon icon={faServer} />
                      Pricing Plans
                    </a>
                  </li>
                  <li>
                    <a href="#video">
                      <FontAwesomeIcon icon={faPlayCircle} />
                      Top Video
                    </a>
                  </li>
                  <li>
                    <a href="#stats">
                      <FontAwesomeIcon icon={faChartBar} />
                      Stats
                    </a>
                  </li>
                  <li>
                    <a href="#discount">
                      <FontAwesomeIcon icon={faPercent} />
                      Request A Discount
                    </a>
                  </li>
                </ul>
              </div>
              {/* End MegaMenu */}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
