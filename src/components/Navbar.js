import React from "react";

export const Navbar = (props) => {
  return (
    <div className="Navbar">
      <div>
        <img className="logo" src={window.location.origin + '/assets/tech-logo.svg'} alt="Julen Tech Logo"></img>
      </div>
      <nav class="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Youtube</a></li>
          <li><a href="#">Shop</a></li>
          <button>Subscribe</button>
          <button>Contact</button>
        </ul>
      </nav>
    </div>
  )
}
