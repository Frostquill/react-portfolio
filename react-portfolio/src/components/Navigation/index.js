import React from 'react';

const Navigation = (props) => {
    const { currentPage, setCurrentPage } = props; 
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];
    return (
        <header>
                <div className= "row">
                    <div className = "col-10">
        <h1>Michael Ruiz</h1>
        </div>
        <ul className = 'col-2 justify-content-end nav'>
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
        </div>
        </header>
    );
}

export default Navigation;