import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import team1 from '../assets/team-01.jpg'
import team2 from '../assets/team-02.jpg'
import team3 from '../assets/team-03.jpg'
import team4 from '../assets/team-04.jpg'
import team5 from '../assets/team-05.png'
import team6 from '../assets/team-06.png'
import team7 from '../assets/team-07.jpg'
import team8 from '../assets/team-08.jpg'
import Member from "./Member";

function TeamMember() {
    const teamMember = [
        {
            image: team1, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team2, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team3, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team4, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team5, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team6, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team7, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        },
        {
            image: team8, 
            social: [faFacebookF, faLinkedin, faTwitter, faYoutube],
            title: 'Name',
            text: "Simple Short Description",
        }
    ]
    return ( 
        <>
            <div className="team" id="team">
                <h2 className="main-title">Team Member</h2>
                <div className="container">
                    {teamMember.map((team,index) => (
                        <Member team={team} key={index} />
                    ))}
                </div>
            </div>
        </>
     );
}

export default TeamMember;