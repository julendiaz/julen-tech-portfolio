import React from "react";

export const Blogpost = (props) => {

    // function hoverColor (e) {
    //     const blogpost = [...document.querySelectorAll(".blogpost")];
    //     const bloglink = [...document.querySelectorAll(".blogpost__link")]
    //     switch(e.target.id) {
    //         case "first": 
    //             blogpost[0].style.backgroundColor = "#fcc584";
    //             bloglink[0].style.backgroundColor = "#fcc584";
    //             break;
    //         case "second":
    //             blogpost[1].style.backgroundColor = "#97d1f8";
    //             bloglink[1].style.backgroundColor = "#97d1f8";
    //             break;
    //         case "third":
    //             blogpost[2].style.backgroundColor = "#97f8b2";
    //             bloglink[2].style.backgroundColor = "#97f8b2";
    //             break;
    //         default:
    //             blogpost[0].style.backgroundColor = "#fafafa";
    //     }
    // } 

    // function backToWhite (e) {
    //     const bloglink = [...document.querySelectorAll(".blogpost__link")]
    //     e.target.style.backgroundColor = "#fafafa";

    //     switch(e.target.id) {
    //         case "first": 
    //             bloglink[0].style.backgroundColor = "#fcc584";
    //             break;
    //         case "second":
    //             bloglink[1].style.backgroundColor = "#97d1f8";
    //             break;
    //         case "third":
    //             bloglink[2].style.backgroundColor = "#97f8b2";
    //             break;
    //         default:
    //             blogpost[0].style.backgroundColor = "#fafafa";
    //     }
    //     e.target.firstChild.style.backgroundColor = "#fafafa";
    // }


    
    return (
        <div className="blogpost" id={props.id}>
            <a href={props.link} className="blogpost__link" target="_blank" rel="noreferrer">{props.title}</a>
        </div>
    )
}