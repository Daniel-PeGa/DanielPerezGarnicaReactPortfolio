import React from 'react';

function Resume() {
    return (
        <div className="flexCenterCol w100">
            <div className="flexCenterCol">
                <p>Feel free to check my resume on the button below</p>
            <a className="button is-primary text-decorations" href={process.env.PUBLIC_URL + "/danielPerezGarnicaResume.pdf"} target="_blank" rel="noreferrer"
            ><button class="noselect">Resume</button></a>
            </div>

            <div>
                <h3>My skills include:</h3>
                <ul className="noList">
                    <li>Third-party APIs</li>
                    <li>MySQL</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>Advanced CSS</li>
                    <li>jQuery</li>

                </ul>
            </div>
        </div>
    );
}

export default Resume;