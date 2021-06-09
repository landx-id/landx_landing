import ReactDOM from "react-dom";
import React from "react";
import "../project-filter/style.css";

export const ProjectCountPortal = (props) => {

    function resetFilter() {
        props.reset();
    }

    return (
        ReactDOM.createPortal(
            <span>
                <span className="text-primary bold" style={{fontFamily: 'Inter', fontSize: 16, letterSpacing: 0.15}}>
                    {props.count} Project sesuai Filter
                </span>
                <span className="filter-link ml-2" style={{color: "#2dbe60"}} onClick={resetFilter}>
                    RESET FILTER
                </span>
            </span>
            , document.getElementById('projectCount')
        )
    )
}
