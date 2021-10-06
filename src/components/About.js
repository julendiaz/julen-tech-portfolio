import React from "react";

export const About = () => {
    return (
        <div className="about">
            <div className="about__certifications-container">
                <p>Certified by:</p>
                <div className="about__certifications">
                    <img className="about__img about__img--uji" src={window.location.origin + '/assets/uji.png'} alt="UJI logo"></img>
                    <img className="about__img about__img--ou"src={window.location.origin + '/assets/ou.png'} alt="OU logo"></img>
                    <img className="about__img about__img--free" src={window.location.origin + '/assets/freecodecamp.png'} alt="freecodecamp logo"></img>
                </div>
            </div>
            <div className="about__stats about__stats--commits">
                <p>Total Commits 2021</p>
                <h2>403</h2>
            </div>
            <div className="about__stats about__stats--subs">
                <p>Youtube Subs</p>
                <h2>1200</h2>
            </div>
        </div>
    )
}