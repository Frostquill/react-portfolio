import React, { useState } from 'react';
import Navigation from '../Navigation';


function Project (props) {
//    const { currentPage, setCurrentPage } = props;

    return (
        <div>
          <Navigation currentPage = {currentPage} handlePageChange={handlePageChange} />
             <div>
        
           { renderPage(currentPage)}
        
        </div>
        </div>
        
    );
}

export default Project;