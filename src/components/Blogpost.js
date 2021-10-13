import React from "react";

export const Blogpost = (props) => {   
    return (
        <div className="blogpost" id={props.id}>
            <a href={props.link} className="blogpost__link" target="_blank" rel="noreferrer">{props.title}</a>
        </div>
    )
}