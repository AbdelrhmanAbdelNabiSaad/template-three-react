import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatBox({ stat }) {
    const { icon, number, text } = stat;
    return ( 
        <>
            <div className="box">
                <FontAwesomeIcon icon={icon} />
                <span className="number">{number}</span>
                <div className="text">{text}</div>
            </div>
        </>
     );
}

export default StatBox;