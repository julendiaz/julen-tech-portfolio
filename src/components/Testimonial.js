import React from "react";

export const Testimonial = (props) => {
    return (
        <div className="testimonial__container--single">
            <div className="testimonial__photo-container">
                <img className="testimonial__photo" src={props.image} alt={props.alt}/>
            </div>
            <div className="testimonial__personal-info">
                <h6 className="testimonial__name">{props.name}</h6>
                <h6 className="testimonial__role">{props.role}</h6>
            </div>
        </div>
    )
    
}