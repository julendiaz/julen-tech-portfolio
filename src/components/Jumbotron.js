import React from "react";

export const Jumbotron = () => {
    return (
        <div className="jumbotron">
            <div className="jumbotron__text-container">
                <h5>Hi! 👋 Nice to meet you,</h5>
                <h1 className="jumbotron__main-title">I’m <span>Julen Diaz,</span> <br/>
                    a <span>Full-Stack Developer</span><br/>
                    based in <span>Germany</span></h1>
                <p>I love building meaningful applications through clean, scalable and modular code.<br/> 
                On my Youtube Channel, I help people write stronger code and develop good habits. </p>
                <div className="jumbotron__social-media">
                    <a href="https://github.com/julendiaz" target="_blank" rel="noreferrer"><img className="jumbotron__social-media--logo" src={window.location.origin + '/assets/github-logo.png'} alt="Github Logo"></img></a>
                    <a href="https://twitter.com/julentech" target="_blank" rel="noreferrer"><img className="jumbotron__social-media--logo" src={window.location.origin + '/assets/twitter-logo.png'} alt="Twitter Logo"></img></a>
                </div>
            </div>
        </div>
    )
}