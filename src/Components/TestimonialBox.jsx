import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TestimonialBox({ test }) {
    const totalStar = 5;
    return ( 
        <>
            <div className="box">
                <img src={test.image} alt="Image" />
                <h3>{test.name}</h3>
                <span className="title">{test.title}</span>
                <div className="rate">
                    {[...Array(totalStar)].map((_, index) => <FontAwesomeIcon key={index} icon={faStar} className={index < test.rate ? 'filled': ""} />)}
                </div>
                <p>{test.text}</p>
            </div>
        </>
     );
}

export default TestimonialBox;