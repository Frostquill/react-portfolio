import React from 'react';

const Navigation = (props) => {
    const { currentPage, setCurrentPage } = props; 
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];
    return (
        <ul className = 'nav nav-tabs'>
            {tabs.map(tab => (
                <li className = "nav-item" key={tab}>
                    <a
                    href={'#' + tab.toLowerCase()}
                    onClick={() => setCurrentPage(tab)}
                    className={
                        currentPage === tab ? 'nav-link active' : 'na-link'
                    }
                    >
                        {tab}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Navigation;