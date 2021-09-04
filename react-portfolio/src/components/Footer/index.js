import React from 'react';
import GitHub from '../../assets/images/GitHub-Mark-64px.png';
import Stack from '../../assets/images/stack-overflow.png';
import LinkedIn from '../../assets/images/linked-in.png';

const Footer = () => (
    <footer>
    <div className="container">
    <div className = "row">
        <div className="d-flex justify-content-center">
        <a href="https://github.com/Frostquill">
            <img className= "logos " alt="github logo" src={GitHub}></img>
        </a>
        <a href="https://stackoverflow.com/users/15561605/frostquill">
            <img className= "logos" alt = "stack overflow" src={Stack}></img>
        </a>
        <a href = "https://www.linkedin.com/in/michael-ruiz-235b951b6/">
            <img className="logos" alt = "linkedin" src={LinkedIn}></img>
        </a>

        </div>
    </div>
    </div>
    </footer>
)

export default Footer;