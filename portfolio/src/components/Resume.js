import React from 'react';

function Resume() {
    return (
        <div>
        <p>Im Daniel and this is my Resume. Theres still much to do here</p>
        <div className="flexCenterCol">
        <a className="button is-primary text-decorations" href={process.env.PUBLIC_URL + "/danielPerezGarnicaResume.pdf"} target="_blank" rel="noreferrer"
        ><button class="noselect">Resume</button></a>
        </div>
        </div>
    );
}

export default Resume;