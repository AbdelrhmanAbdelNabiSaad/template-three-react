import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faAngleDoubleRight,
  faClock,
  faMapMarker,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gallery1 from "../assets/gallery-01.png";
import gallery2 from "../assets/gallery-02.png";
import gallery3 from "../assets/gallery-03.jpg";
import gallery4 from "../assets/gallery-04.png";
import gallery5 from "../assets/gallery-05.jpg";
import gallery6 from "../assets/gallery-06.png";
function Footer() {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="box">
            <h3>Elzero</h3>
            <ul className="social">
              <li>
                <a href="#" className="facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#" className="youtube">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
            <p className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus nulla rem, dignissimos iste aspernatur
            </p>
          </div>
          <div className="box">
            <ul className="links">
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Important Link 1
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Important Link 2
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Important Link 3
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Important Link 4
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />
                  Important Link 5
                </a>
              </li>
            </ul>
          </div>
          <div className="box">
            <div className="line">
              <FontAwesomeIcon icon={faMapMarker} />
              <div className="info">
                Egypt, Giza, Inside The Sphinx, Room Number 220
              </div>
            </div>
            <div className="line">
              <FontAwesomeIcon icon={faClock} />
              <div className="info">Business Hours: From 10:00 To 18:00</div>
            </div>
            <div className="line">
              <FontAwesomeIcon icon={faPhoneVolume} />
              <div className="info">
                <span>+20123456789</span>
                <span>+20123456789</span>
              </div>
            </div>
          </div>
          <div className="box footer-gallery">
            <img src={gallery1} alt="Image" />
            <img src={gallery2} alt="Image" />
            <img src={gallery3} alt="Image" />
            <img src={gallery4} alt="Image" />
            <img src={gallery5} alt="Image" />
            <img src={gallery6} alt="Image" />
          </div>
        </div>
        <p className="copyright">Made With &lt; By Elzero</p>
      </footer>
    </>
  );
}

export default Footer;
