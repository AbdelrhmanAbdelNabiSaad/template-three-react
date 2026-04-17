import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServicesBox({ services }) {
    const {icon, title} = services;
    return ( 
        <>
            <div className="box">
                <FontAwesomeIcon icon={icon} />
                <h3>{title}</h3>
                <div className="info">
                    <a href="#">Details</a>
                </div>
            </div>
        </>
     );
}

export default ServicesBox;