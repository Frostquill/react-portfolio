import React, { useState } from 'react';
import Navigation from '../Navigation';
import Aboutme from '../pages/Aboutme';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';

function Project () {
    const [currentPage, handlePageChange] = useState('About Me')

    const renderPage = () => {
        switch(currentPage) {
            case 'About Me':
                return <Aboutme />
            case 'Contact':
                return <Contact />
            case 'Portfolio':
                return <Portfolio />
            case 'Resume': 
                return <Resume />
            default: 
                return <Aboutme/>
        }
    };

    return (
        <div>
            <Navigation currentPage = {currentPage} handlePageChange={handlePageChange} />
            <div>
        {
            renderPage(currentPage)
        }
        </div>
        </div>
    );
}

export default Project;