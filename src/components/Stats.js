import React from "react";

export const Stats = () => {
    return (
        <div className="stats">
            <div className="stats__certifications-container">
                <p>Certified by:</p>
                <div className="stats__certifications">
                    <img className="stats__img stats__img--uji" src={window.location.origin + '/assets/uji.png'} alt="UJI logo"></img>
                    <img className="stats__img stats__img--ou"src={window.location.origin + '/assets/ou.png'} alt="OU logo"></img>
                    <img className="stats__img stats__img--free" src={window.location.origin + '/assets/freecodecamp.png'} alt="freecodecamp logo"></img>
                </div>
            </div>
            <div className="stats__stats stats__stats--commits">
                <p>Total Commits 2021</p>
                <h2>403</h2>
            </div>
            <div className="stats__stats stats__stats--subs">
                <p>Youtube Subs</p>
                <h2>1200</h2>
            </div>
        </div>
    )
}