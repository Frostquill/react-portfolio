import React from 'react';

const Navigation = (props) => {
    const { setCurrentPage } = props; 
    const tabs = ['About Me', 'Contact', 'Portfolio', 'Resume'];
    return (
        <header>
        <nav className="navbar">
            <div className = "col-8 mt-1">
                <h1>Michael Ruiz</h1>
            </div>
            <ul className = ' col-4 justify-content-end nav mt-2'>
                {tabs.map(tab => (
                    <li className = "nav-item tabs-back" key={tab}>
                        <a
                        href={'#' + tab.toLowerCase()}
                        onClick={() => setCurrentPage(tab)}
                        className= "tabs"
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </header>
    );
}

export default Navigation;