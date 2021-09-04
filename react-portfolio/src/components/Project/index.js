import React  from 'react';



function Project (props) {
const {
  projects
} = props;

    return (
      <>
         {projects.map(project => (
          <div className="project-card">
            <img src = {require(`../../assets/images/thumbs/${project.image}`).default} alt="description"></img>
            <h2>{project.name}</h2>
            <a href={project.link}>link</a>
            <a href={project.github}>link</a>
          </div>
         )
         )
        }
         
        
       
         </>
        
    );
}

export default Project;