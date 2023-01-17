import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <About />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Contact':
                return <Contact />;
            case 'Resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <div className="headerContainer">
            <h1>Daniel Perez Garnica</h1>
            <Navigation 
            currentPage={currentPage} h
            andlePageChange={handlePageChange}></ Navigation>
            <div>{renderPage(currentPage)}</div>
        </div>
    );
}

export default Header;