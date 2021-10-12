import React from "react";
import { Testimonial } from "./Testimonial";
import { josevi, kilian, laila } from "./testimonial-data";
import '../css/style.css'

export const Testimonials = () => {

    return (
        <div className="testimonial">
            <h1 className="testimonial__title">Testimonials</h1>
            <div className="testimonial__container--all">
                <Testimonial name={josevi.name} id={josevi.id} role={josevi.role} image={josevi.image} alt={josevi.alt} heading={josevi.heading} feedback={josevi.feedback}/>
                <Testimonial name={kilian.name} id={kilian.id} role={kilian.role} image={kilian.image} alt={kilian.alt} heading={kilian.heading} feedback={kilian.feedback} />
                <Testimonial name={laila.name} id={laila.id} role={laila.role} image={laila.image} alt={laila.alt} heading={laila.heading} feedback={laila.feedback}/>
            </div>

        </div>
    )
}