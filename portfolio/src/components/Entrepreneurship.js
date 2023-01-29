import React from 'react';

function Entrepreneurship() {
    return (
        <div>
        <h1>Entrepreneurship Path</h1>
        <div className="flexCenterRow spaceAround">
            <div className="w40">
        <p>
            From a very early age, I have had an Entrepreneur mindset. 
        </p>
        <p>
            I have been blessed with the opportunities to develop in many different avenues to
            learn from the very basics in business to rather complicated concepts and behaviors
        </p>
        <p>
            As a child, I could be found selling my school lunch for as much as I could possibly get,
            as well as my Halloween candies, ice cream throughout the summer, etc. You name it, I can sell it.
        </p>
        </div>
        <div>
        <p>
            At school, I received different awards for my business skills, such as:
        </p>
        <ul className="noList">
            <li>High Academic Accomplishment in Entrepreneurship at Franklin High School</li>
            <li>Best Engineered Product Idea at Middle Tennessee State University</li>
            <li>Principle of Finance State Career Development Contest Winner for DECA</li>
            <li>Principles of Finance National Level Competitor for DECA</li>
            <li>Award of Excellence in Economics at Columbia State Community College</li>
        </ul>
        </div>
        </div>
        <p>
            Currently Trying to apply my recently acquired software development skills to create
            an algorithm to trade online. You can check my github repository about it by clicking on the 
            picture below:
        </p>
        <a href="https://github.com/Daniel-PeGa/algoTrading">
            <img className="w20" src="/images/stonks.png" alt="stonks"/>
        </a>
        </div>
    );
}

export default Entrepreneurship;