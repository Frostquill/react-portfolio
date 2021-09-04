import React, {useState} from 'react';
import Project from '../Project';

const Portfolio = () => {
    const [projects]  = useState ([
        {
          name: 'Run Buddy',
          link: 'https://frostquill.github.io/run-buddy/',
          image: 'image-01.jpg',
          github: 'https://github.com/Frostquill/run-buddy'
        },
        {
          name: 'Beer Advisor',
          link: 'https://frostquill.github.io/beer-advisor/',
          image: 'image-02.jpg',
          github: 'https://github.com/Frostquill/beer-advisor'
        },
        {
          name: 'Socially Fit',
          link: 'https://rocky-mountain-44170.herokuapp.com/',
          image: 'image-03.jpg',
          github: 'https://github.com/AlbertRyanFonseca/Project2'
        },
        {
          name: 'Weather Dashboard',
          link: 'https://frostquill.github.io/weather-dashboard/',
          image: 'image-04.jpg',
          github: 'https://github.com/Frostquill/weather-dashboard'
        },
        {
          name: 'Budget Tracker',
          link: 'https://immense-beyond-84101.herokuapp.com/',
          image: 'image-05.jpg',
          github: 'https://github.com/Frostquill/budget-tracker'
        },
        {
          name: 'Horiseon',
          link: 'https://frostquill.github.io/Horiseon/',
          image: 'image-06.jpg',
          github: 'https://github.com/Frostquill/Horiseon'
        }
      ])

      return (
    <div>
    <h1>Portfolio</h1>
    <div>
    <Project
    projects={projects}> 
        </Project>
    </div>
    </div>
      )
      };

export default Portfolio;