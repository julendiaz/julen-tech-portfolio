import React from "react";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__first-line">
                <h1 className="footer__main-logo">JulenTech</h1>
                <div className="footer__links">
                    <ul className="footer__links--container">
                        <li className="footer__links--link"><a href="#">TERMS</a></li>
                        <li className="footer__links--link"><a href="#">ABOUT</a></li>
                        <li className="footer__links--link"><a href="#">BLOG</a></li>
                        <li className="footer__links--link"><a href="#">SHOP</a></li>
                        <button className="button button--contact">CONTACT</button>
                    </ul>
                </div>
                <div className="footer__social-media">
                    <a href="https://github.com/julendiaz" target="_blank" rel="noreferrer"><img className="footer__social-media--logo" id="github-logo" src={window.location.origin + '/assets/github-logo.png'} alt="Github Logo"></img></a>
                    <a href="https://twitter.com/julentech" target="_blank" rel="noreferrer"><img className="footer__social-media--logo" src={window.location.origin + '/assets/twitter-logo.png'} alt="Twitter Logo"></img></a>
                </div>
            </div>
            <div className="footer__second-line">
                <h3 className="footer__subscribe-title">Subscribe Now</h3>
                <input className="footer__subscribe-input" type="text" placeholder="Sign up for a weekly newsletter"></input>
                <button className="button button--signup">Sign Up</button>
            </div>
        </div>
    )
};