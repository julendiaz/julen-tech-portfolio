import React from "react";
import '../css/style.css';

export const Testimonial = (props) => {
    function displayFeed(e) {
        const feedbackContainer = [...document.querySelectorAll(".testimonial__feedback-container")];
        switch(e.target.id) {
            case "josevi":
                feedbackContainer[0].classList.remove("hide");
                break;
            case "kilian":
                feedbackContainer[1].classList.remove("hide");
                feedbackContainer[1].style.marginTop = "1em";
                break;
            case "laila":
                feedbackContainer[2].classList.remove("hide");
                feedbackContainer[2].style.marginTop = "-12em";
                break;
            default:
                feedbackContainer[0].classList.remove("hide");
        }
    } 

    function hideFeed(e) {
        const feedbackContainer = [...document.querySelectorAll(".testimonial__feedback-container")];
        switch(e.target.id) {
            case "josevi":
                feedbackContainer[0].classList.add("hide");
                break;
            case "kilian":
                feedbackContainer[1].classList.add("hide");
                break;
            case "laila":
                feedbackContainer[2].classList.add("hide");
                break;
            default:
                feedbackContainer[0].classList.add("hide");
        }
    }

    return (
        <div className="testimonial__feed">
            <div className="testimonial__container--single" id={props.id} onMouseEnter={displayFeed} onMouseLeave={hideFeed}>
                <div className="testimonial__photo-container">
                    <img className="testimonial__photo" src={props.image} alt={props.alt}/>
                </div>
                <div className="testimonial__personal-info">
                    <h6 className="testimonial__name">{props.name}</h6>
                    <h6 className="testimonial__role">{props.role}</h6>
                </div>
            </div>
            <div className="testimonial__feedback-container hide">
                <h5>{props.heading}</h5>
                <p>{props.feedback}</p>
            </div>
        </div>
    )
    
}