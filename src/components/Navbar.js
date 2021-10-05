import React from "react";

export const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div>
        <img className="logo" src={window.location.origin + '/assets/tech-logo.svg'} alt="Julen Tech Logo"></img>
      </div>
      <nav className="nav">
        <ul className="nav__nav-container">
          <li className="nav__link"><a href="#">Home</a></li>
          <li className="nav__link"><a href="#">Work</a></li>
          <li className="nav__link"><a href="#">Youtube</a></li>
          <li className="nav__link"><a href="#">Shop</a></li>
          <button className="nav__button">Subscribe</button>
          <button className="nav__button">Contact</button>
        </ul>
      </nav>
    </div>
  )
}
