import React from "react";

export const Navbar = (props) => {
  return (
    <div className="Navbar">
      <nav className="nav">
        <div className="main-logo-container">
          <img className="main-logo" src={window.location.origin + '/assets/tech-logo.svg'} alt="Julen Tech Logo"></img>
        </div>
        <ul className="nav__nav-container">
          <li className="nav__link"><a href="#">home</a></li>
          <li className="nav__link"><a href="#">work</a></li>
          <li className="nav__link"><a href="#">youtube</a></li>
          <li className="nav__link"><a href="#">shop</a></li>
          <button className="nav__button">subscribe</button>
          <button className="nav__button">contact</button>
        </ul>
      </nav>
    </div>
  )
}
