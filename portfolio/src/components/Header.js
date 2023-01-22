import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Entrepreneurship from './Entrepreneurship'

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About':
                return <div><About /></div>;
            case 'Portfolio':
                return <div><Portfolio /></div>;
            case 'Entrepreneurship':
                return <div><Entrepreneurship /></div>
            case 'Contact':
                return <div><Contact /></div>;
            case 'Resume':
                return <div><Resume /></div>;
            default:
                return <div><About /></div>;
        }
    };

    return (
        <div className="headerContainer">
            <div className="headerName border">
            <h1>Daniel Perez Garnica</h1>
            </div>
            <div className="flexCenterCol">
            <Navigation 
            currentPage={currentPage} 
            handlePageChange={handlePageChange}></ Navigation>
            <div>{renderPage(currentPage)}</div>
            </div>
        </div>
    );
}

export default Header;