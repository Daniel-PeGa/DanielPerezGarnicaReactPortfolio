import React from "react";

function Project(props) {
  return (
    <div className="flexCenterCol">
      <div className="border maxW80 flexCenterRow">
        {props.projects.map((project) => (
          <div className="w40 flexCenterCol border m02">
            <div className="card">
              <div className="card-image">
                <figure className="">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img className="w100" src={process.env.PUBLIC_URL + project.image} alt="Placeholder image" />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="content is-family-code flexCenterCol">
                  <div className="flexCenterCol">  Languages: {project.languages} </div>
                  </div>
                  <div className="card">
                    <br />
                    <footer className="card-footer">
                      <a
                        href={project.repo}
                        className="card-footer-item text-decorations"
                        target="_blank" rel="noreferrer"
                      >
                        See the Repo!
                      </a>
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item text-decorations"
                        target="_blank" rel="noreferrer"
                      >
                        See the Live Site!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
