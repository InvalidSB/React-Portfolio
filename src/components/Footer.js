import React from "react";
import Fade from "react-reveal/Fade";

import logo from "../assets/cover.png";

function Footer() {
  return (
    <div>
      <Fade bottom cascade>
        <div className="footer">
          <div className="logo-placed">
            <img src={logo} alt="suzan" />
          </div>
          <div className="social-icon">
            <a href="/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; 2019 copyright all right reserved</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;