import React from "react";
import hostingBasic from '../assets/hosting-basic.png'
import hostingAdvanced from '../assets/hosting-advanced.png'
import hostingProfessional from '../assets/hosting-professional.png'
import PlanBox from "./PlanBox";

function Pricing() {

    const plans = [
      {
        title: "Basic",
        img: hostingBasic,
        amount: "$15",
        time: "Per Month",
        list: [
          "10GB HDD Space",
          "5 Email Addresses",
          "2 Subdomains",
          "4 Databases",
          "Basic Support",
        ],
      },
      {
        title: "Advanced",
        img: hostingAdvanced,
        amount: "$25",
        time: "Per Month",
        list: [
          "20GB HDD Space",
          "10 Email Addresses",
          "5 Subdomains",
          "8 Databases",
          "Advanced Support",
        ],
      },
      {
        title: "Professional",
        img: hostingProfessional,
        amount: "$15",
        time: "Per Month",
        list: [
          "50GB HDD Space",
          "20 Email Addresses",
          "10 Subdomains",
          "20 Databases",
          "Professional Support",
        ],
      },
    ];
    
    return ( 
        <>
            <div className="pricing" id="pricing">
                <div className="dots dots-up"></div>
                <div className="dots dots-down"></div>
                <h2 className="main-title">Pricing Plans</h2>
                <div className="container">
                    {plans.map((plan, index) => <PlanBox plan={plan} index={index} />)}
                </div>
            </div>
        </>
     );
}

export default Pricing;