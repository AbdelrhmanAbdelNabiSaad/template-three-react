import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ArticleBox({ article, index }) {
    const { image, title, text } = article;
    return ( 
        <>
            <div className="box">
                <img src={image} alt={`Image-${index}`} />
                <div className="content">
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="info">
                    <a href="#">Read More</a>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                </div>
            </div>
        </>
     );
}

export default ArticleBox;