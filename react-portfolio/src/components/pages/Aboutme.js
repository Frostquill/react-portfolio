import React from 'react';
import ProfilePic from '../../assets/images/Profile-pic.jpg';

const About = () => (
    <div className = "container">
        <div className = "row pt-5">
        <h1> About Me </h1>
        <img src={ProfilePic} alt="Avatar" className="avatar"></img>
        <p>
        Back end web developer leveraging a Military Background of 8 years, that consisted of teamwork, problem solving, leadership, supervising, project management, critical thinking, determination, all of which offer necessary tools to bring a project to fruition.
        </p>
        <p>
        Earned a certificate in Full Stack Web Development from the University of California, Los Angeles (UCLA) Extension, Coding Boot Camp. 
        Technology has always been a huge interest, pursuing a web development career path seemed a natural progression. I bring my passion, skills, and growing knowledge to contribute to future technology. 
        </p>
    </div>
    </div>
);

export default About;
