import React from "react";

export const Jumbotron = (props) => {
    return (
        <div className="jumbotron">
            <div className="jumbotron__text-container">
                <h5>Hi! 👋 Nice to meet you,</h5>
                <h1 className="jumbotron__main-title">I’m <span>Julen Diaz,</span> <br/>
                    a <span>Full-Stack Developer</span><br/>
                    based in <span>Germany</span></h1>
                <p>I love building meaningful applications through clean, scalable and modular code.<br/> 
                On my Youtube Channel, I help people write stronger code and develop good habits. </p>
                <button className="button button--jumbotron">LET'S WORK TOGETHER</button>
            </div>
        </div>
    )
}