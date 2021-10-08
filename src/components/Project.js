import React from "react";

export const Project = (props) => {
    return (
        <div className="project project__container">
            <div className="project__division project__division--text">
                <div className="project__stack"></div>
                <h1 className="project__title">{props.title}</h1>
                <p className="project__description">{props.text}</p>
                <div className="project__links">
                    <button className="button button--project">Source Code</button>
                    <button className="button button--project">Live Preview</button>
                </div>
            </div>
            <div className="project__division project__division--image">
               
            </div>
        </div>
    )
    
}