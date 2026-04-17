import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero from '../assets/landing-image.png'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return (
      <>
        <div className="landing">
          <div className="container">
            <div className="text">
              <h1>Welcome, To Elzero World</h1>
              <p>
                Here Iam gonna share everything about my life. Books Iam
                reading, Games Iam Playing, Stories and Events
              </p>
                    </div>
                    <div className="image">
                        <img src={hero} alt="" />
                    </div>
                </div>
                <a href="#" className='go-down'><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
        </div>
      </>
    );
}

export default Hero;