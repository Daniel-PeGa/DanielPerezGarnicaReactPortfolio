import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: 'Weather Dashboard',
        languages: 'openWeather third party API, JavaScript, CSS, HTML',
        image: '/images/climas-pic.jpeg',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. It is a weather dashboard that gives you current weather data of the city you're searching for, defaulting to Nashville, TN. It gets the weather forecast also for the following five days and displays it in separate cards, along with a symbol representing the state of the weather. The information comes from the OpenWeather API. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/weatherDashboard',
        live: 'https://daniel-pega.github.io/weatherDashboard/',
    },
];

function Portfolio() {
    return (
        <div className="flexCenterCol">
        <p>This are some projects I've worked at during my time in Vanderbilt University's coding bootcamp:
        </p>
        <div>
            <Project projects={projects}/>
        </div>
        <p>And this are some projects I have been working on just out of curiosity:</p>
        <p>For more, you can visit my github page:</p>
        </div>
    );
}

export default Portfolio;