import React from "react";
import features1 from '../assets/features-01.jpg'
import features2 from '../assets/features-02.jpg'
import features3 from '../assets/features-03.jpg'
import FeaturesBox from "./FeaturesBox";


function Features() {

    const features = [
      {
        image: features1,
        title: "Quality",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
      },
      {
        image: features2,
        title: "Time",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
      },
      {
        image: features3,
        title: "Passion",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima",
      },
    ];

        let nameClass = ["quality", "time", "passion"];

    return ( 
        <>
            <div className="features" id="features">
                <h2 className="main-title">Features</h2>
                <div className="container">
                    {features.map((feat, index) => <FeaturesBox className={nameClass[index]} feat={feat} key={index} />)}
                </div>
            </div>
        </>
     );
}

export default Features;