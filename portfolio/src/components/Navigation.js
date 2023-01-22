import React from 'react';

function Navigation(props) {
    const tabs = ['About', 'Portfolio', 'Entrepreneurship', 'Contact', 'Resume']
    return (
        <div className="w80 flexCenterCol">
        <ul className="nav nav-tabs pageOptions">
          {tabs.map((tab) => (
            <li
              className={
                props.currentPage === tab ? "nav-item is-active text-decorations" : "nav-item text-decorations"
              }
              key={tab}
            >
              <div className="pageRendered">
              <a
                href={"#" + tab.toLowerCase()}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? "nav-link active text-decorations" : "nav-link text-decorations"
                }
              >
                {tab}
              </a>
            </div>
            </li>
          ))}
        </ul>
      </div>
  
    );
}

export default Navigation;