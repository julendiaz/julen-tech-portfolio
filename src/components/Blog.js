import React from "react";
import { Blogpost } from "./Blogpost";
import { firstPost, secondPost, thirdPost } from "./blogpost-data";

export const Blog = () => {
    return (
        <div className="blog">
            <div className="blog__heading">
                <h1 className="blog__title">Blog</h1>
                <h4 className="blog__subtitle">My personal blog where I write about<br /> how to become stronger as developers<br /> and build meaningful products 👇</h4>
            </div>
            <div className="blog__links">
                <Blogpost link={firstPost.link} title={firstPost.title}  id={firstPost.id} />
                <Blogpost link={secondPost.link} title={secondPost.title} id={secondPost.id}/>
                <Blogpost link={thirdPost.link} title={thirdPost.title} id={thirdPost.id} />
            </div>
        </div>
    )
}