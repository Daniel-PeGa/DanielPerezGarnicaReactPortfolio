import React from 'react';

function About() {
    return (
        <div className="flexCenterCol">
        <p>I'm Daniel Perez Garnica. </p>
        <img className="w20" src="/images/danielPhoto.jpeg" alt="danielPhoto" />
        <p className="w80">Recent graduate from Vanderbilt University's Coding Bootcamp, where I learned how to make use of different technologies
            to create an application. Such technologies include:
        </p>
        <div className="row noList">
        <li>
            <ul>HTML</ul>
            <ul>CSS</ul>
        </li>
        <li>
            <ul>JavaScript</ul>
            <ul>Third-party APIs</ul>
        </li>
        <li>
            <ul>jQuery</ul>
            <ul>MySQL</ul>
        </li>
        <li>
            <ul>Node.js</ul>
            <ul>NoSQL</ul>
        </li>
        <li>
            <ul>Express.js</ul>
            <ul>React.js</ul>
        </li>
        </div>
        <p className="w80">Currently on the path to earn some expertise with Python and tinkering
            with different new technologies of which I'm curious of. </p>
            <hr />
            <p className="w80">Business-driven. Currently learning about algo-trading and how to be good at it. 
                You can check more about this on my Entrepreneurship page
            </p>
        </div>
    );
}

export default About;