import React from "react";
import { Testimonial } from "./Testimonial";
import { josevi } from "./testimonial-data";

export const Testimonials = () => {
    return (
        <div className="testimonial">
            <h1 className="testimonial__title">Testimonials</h1>
            <div className="testimonial__container--all">
                <Testimonial name={josevi.name} role={josevi.role} image={josevi.image} alt={josevi.alt} />
            </div>

        </div>
    )
}