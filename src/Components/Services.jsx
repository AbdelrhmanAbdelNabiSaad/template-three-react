import { faBullhorn, faLaptopCode, faMapMarkedAlt, faPalette, faTools, faUserShield } from "@fortawesome/free-solid-svg-icons";
import Spikes from "./Spikes";
import ServicesBox from "./ServicesBox";

function Services() {

    const services = [
      { icon: faUserShield, title: "Security" },
      { icon: faTools, title: "Fixing Issues" },
      { icon: faMapMarkedAlt, title: "Location" },
      { icon: faLaptopCode, title: "Coding" },
      { icon: faPalette, title: "Security" },
      { icon: faBullhorn, title: "Marketing" },
    ];

    return ( 
        <>
            <Spikes />
            <div className="services" id="services">
                <h2 className="main-title">Services</h2>
                <div className="container">
                    {services.map((srv, index) => <ServicesBox services={srv} key={index} />)}
                </div>
            </div>
        </>
     );
}

export default Services;