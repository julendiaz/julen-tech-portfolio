import React from "react";

export const Project = (props) => {
    <div className="project project__container">
        <div className="project__text">
            <div className="project__stack"></div>
            <h1 className="project__title">{props.title}</h1>
            <p className="project__text">{props.text}</p>
            <div className="project__links">
                <button className="button button--source">Source Code</button>
                <button className="button button--preview">Live Preview</button>
            </div>
        </div>
        <div className="project__image">
            <img src="{props.image}" alt="{props.image-title}"></img>
        </div>
    </div>
}