import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Member({ team }) {
    const { image, social, title, text } = team;
    return (
      <>
        <div className="box">
          <div className="data">
            <img src={image} alt="Image" />
            <div className="social">
              {social.map((icon) => (
                <a href="#">
                  <FontAwesomeIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="info">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </>
    );
}

export default Member;