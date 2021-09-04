import React from 'react';
import ProfilePic from '../../assets/images/Profile-pic.jpg';

const About = () => (
    <div className = "container">
        <div className = "row pt-5">
        <h1> About Me </h1>
        <img src={ProfilePic} alt="Avatar" className="avatar"></img>
        <p>
                I was born in Los Angeles, California. I went off to serve 7 and a half years in the Air Force where I traveled to multiple locations experiencing various cultures. Ive always enjoyed Computers from an early age as well as video games. My hope is to one day be able to work for a video game company and contribute to the esports scene. 
            </p>
            <p>
               Currently, im participating in a 24 week coding bootcamp at UCLA extension where i will be learning multiple tools in coding such as HTML, CSS, JAVASCRIPT, etc. After ive completed the course I intend to actively seek out a job as a developer in an effort to build my experience and expand my portfolio.
            </p>
    </div>
    </div>
);

export default About;
