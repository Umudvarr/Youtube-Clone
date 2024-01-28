import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar">
          <div className="nav-left">
            <img
              src={require("../images/hamburger menu.png")}
              alt="Hamburger"
              className="hamburgerButton"
            />
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("../images/youtubeLogo.png")}
                alt="Youtube"
                className="youtubeLogo"
              />
            </a>
          </div>
          <div className="nav-center">
            <input type="search" placeholder="Search" className="search" />
            <div className="searchButton">
              <img
                src={require("../images/search btn.png")}
                alt="Search"
                className="searchImg"
              />
            </div>
            <div className="recordBackground">
              <img
                src={require("../images/record btn.png")}
                alt="Record"
                className="recordButton"
              />
            </div>
          </div>
          <div className="nav-right">
            <a
              href="https://www.github.com/Umudvarr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="github">
                <img
                  src={require("../images/icons8-github-30(1).png")}
                  alt="github"
                  className="github-img"
                />
              </div>
            </a>
            <img
              src={require("../images/tree dot.png")}
              alt="More"
              className="treeDot"
            />
            <div className="signIn-right">
              <img
                src={require("../images/sign in.png")}
                alt="signInImg"
                className="signIn-img"
              />
              <h4 className="signIn-text">Sign'in</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
