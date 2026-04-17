import React from "react";
import pc from '../assets/skills.png'
import Skill from "./Skill";
function Skills() {
    const skills = [
        {sk: "HTML", progress: '80%'},
        {sk: "CSS", progress: '85%'},
        {sk: "JavaScript", progress: '70%'},
        {sk: "Python", progress: '80%'},
    ]
    return ( 
        <>
            <div className="our-skills" id="our-skills">
                <h2 className="main-title">Our Skills</h2>
                <div className="container">
                    <img src={pc} alt="Image" />
                    <div className="skills">
                        {skills.map((sk, index) => <Skill skill={sk} key={index} />)}
                    </div>
                </div>
            </div>
        </>
     );
}

export default Skills;