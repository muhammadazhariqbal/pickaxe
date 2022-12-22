import React from "react";
import "./Header.css";

function Header() {
  return (
    <div >
      <div className="header">
        <img
          className="header_image"
          src={require("../../Icons/logo.png")}
          alt="logo"
        />
        <h2>Pickaxe</h2>
      </div>
      <div className="jumbotron">
        <h1>Pickaxe is under construction</h1>
        <h3>
          But the beta version is open to anyone who asks.
          <br />
          It’s free and (semi)-ready to be tested!
        </h3>
        <button className="btn">Visit Beta</button>
      </div>
    </div>
  );
}

export default Header;
