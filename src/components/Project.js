import React from "react";

export const Project = (props) => {
    return (
        <div className="project project__container" style={props.style}>
            <div className="project__division project__division--text">
                <div className="project__stack">
                    <button className="tag tag--stack">{props.stack.one}</button>
                    <button className="tag tag--stack">{props.stack.two}</button>
                    <button className="tag tag--stack">{props.stack.three}</button>
                </div>
                <h1 className="project__title">{props.title}</h1>
                <p className="project__description">{props.description}</p>
                <div className="project__links">
                    <a href={props.links.source} className="button button--project" target="_blank" rel="noreferrer">Source Code</a>
                    <a href={props.links.preview} className="button button--project" target="_blank" rel="noreferrer">Live Preview</a>
                </div>
            </div>
            <div className="project__division project__division--image">
                <img src={props.image} alt={props.alt}/>
            </div>
        </div>
    )
};
