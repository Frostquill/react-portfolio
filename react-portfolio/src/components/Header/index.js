import React, { useEffect } from 'react';
import Navigation from '../Navigation';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Header = (props) => { 
    const {
        currentPage,
        setCurrentPage,
    }  = props

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentPage)
    }, {currentPage} )
    
    
    
    return (
        <section className="header">
            <div>
                <Navigation currentPage={currentPage} 
                setCurrentPage={setCurrentPage}> 
                </Navigation>
            </div>
        </section>
    )}

export default Header;