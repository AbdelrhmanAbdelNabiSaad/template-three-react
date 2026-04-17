import { faCode, faGlobeAsia, faMoneyBillAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import StatBox from "./StatBox";


function Stats() {

    const stats = [
      { icon: faUser, number: "300", text: "Clients" },
      { icon: faCode, number: "400", text: "Projects" },
      { icon: faGlobeAsia, number: "12", text: "Countries" },
      { icon: faMoneyBillAlt, number: "500K", text: "Money" },
    ];

    return ( 
        <>
            <div className="stats" id="stats">
                <h2>Our Awesome Stats</h2>
                <div className="container">
                    {stats.map((stat, index) => <StatBox stat={stat} key={index} />)}
                </div>
            </div>
        </>
     );
}

export default Stats;