import React from 'react';
import Project from './Project';

const projects = [
    {
        id: 0,
        title: 'Weather Dashboard',
        languages: 'openWeather third party API, jQuery, JavaScript, CSS, HTML',
        image: '/images/climas-pic.jpeg',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. It is a weather dashboard that gives you current weather data of the city you're searching for, defaulting to Nashville, TN. It gets the weather forecast also for the following five days and displays it in separate cards, along with a symbol representing the state of the weather. The information comes from the OpenWeather API. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/weatherDashboard',
        live: 'https://daniel-pega.github.io/weatherDashboard/',
    },
    {
        id: 1,
        title: 'Random Password Generator',
        languages: 'JavaScript, CSS, HTML',
        image: '/images/passwordGenerator.png',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. It is, as the name suggests, a random password generator, which will prompt the user with different questions regarding specifics they would like to have in their randomly generated password, such as special characters, numbers, etc. Once the information has been received, it will map over a series of arrays with the different specifics and return the personalized password. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/javaScript_PasswordGenerator',
        live: 'https://daniel-pega.github.io/javaScript_PasswordGenerator/',
    },
    {
        id: 2,
        title: 'Coding Quiz',
        languages: 'JavaScript, CSS, HTML',
        image: '/images/codingQuiz.png',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This is a quiz that will save your responses and then give you a score based on the amount of right and wrong answers. The cool thing about this one work is that it's the first one I did making use of local storage. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/webAPIs_CodeQuiz',
        live: 'https://daniel-pega.github.io/webAPIs_CodeQuiz/',
    },
    {
        id: 3,
        title: 'MySQL Employee Tracker',
        languages: 'jQuery, JavaScript, CSS, HTML, MySQL',
        image: '/images/employeeTracker.jpg',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This is a link to my github repository from this project. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/module-12-challenge',
        live: '',
    },
    {
        id: 4,
        title: 'Workday scheduler',
        languages: 'moment, JavaScript, jQuery, CSS, HTML',
        image: '/images/scheduleDay.jpeg',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This project also makes use of local storagge, as well as 'moment'. It displays normal business hours, and at the begining of the day they're all displayed with the color green, and as the day goes on, hours past turn grey. The cool thing about this is that it also uses local storage to save the text (tasks) that you save on it so you know what to do by what time. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/WorkDayScheduler',
        live: 'https://daniel-pega.github.io/WorkDayScheduler/',
    },
    {
        id: 5,
        title: 'Note Taker',
        languages: 'Express.js, moment, JavaScript, jQuery, HTML, CSS',
        image: '/images/noteTaker.png',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This is a link to my github repository from this project. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/noteTaker_Express',
        live: '',
    },
    {
        id: 6,
        title: 'Professional README.md generator',
        languages: '',
        image: '/images/readmeGenerator.png',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This is a link to my github repository from this project. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/READMEgenerator',
        live: '',
    },
    {
        id: 7,
        title: 'Team Profile Generator',
        languages: '',
        image: '/images/teamProfileGen.png',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This is a link to my github repository from this project. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/teamProfileGenerator',
        live: '',
    },
    {
        id: 8,
        title: 'E-Commerce Backend - MySQL',
        languages: '',
        image: '/images/ecommerce.png',
        description: "This is part of what we have been doing at Vanderbilt's Coding Bootcamp. This is a link to my github repository from this project. Hope you enjoy!",
        repo: 'https://github.com/Daniel-PeGa/ORM_ECommerce-Backend',
        live: '',
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