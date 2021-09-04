import React  from 'react';



function Project (props) {
const {
  projects
} = props;

    return (
      <>
         {projects.map(project => (
          <div className = "col-3">
          <div className="card mt-1" >
            <img className="card-img-top" src = {require(`../../assets/images/thumbs/${project.image}`).default} alt="description"></img>
            <div className="card-body">
            <h5 className="card-title text-secondary">{project.name}</h5>
            </div>
            <div className = "card-body">
            <a className="card-link" href={project.link}>Deployed Link</a>
            <a  className="card-link" href={project.github}>GitHub</a>
            </div>
          </div>
          </div>

         )
         )
        }
         
        
       
         </>
        
    );
}

export default Project;