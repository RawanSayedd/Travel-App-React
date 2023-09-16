import React from "react";
import "./Footer.css";
import { a } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose Your Favorite Destination</p>
        </div>
        <div className="footer-icons">
          <a>
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a>
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a>
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <br />
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a>
            <p>Changelog</p>
          </a>
          <a>
            <p>Status</p>
          </a>
          <a>
            <p>License</p>
          </a>
          <a>
            <p>All Versions</p>
          </a>
        </div>
        <div>
          <h4>Community</h4>
          <a>
            <p>GitHub</p>
          </a>
          <a>
            <p>Issues</p>
          </a>
          <a>
            <p>Stack Overflow</p>
          </a>
          <a>
            <p>Projects</p>
          </a>
        </div>
        <div>
          <h4>Help</h4>
          <a>
            <p>Support</p>
          </a>
          <a>
            <p>TroubleShooting</p>
          </a>
          <a>
            <p>Contact Us</p>
          </a>
        </div>
        <div>
          <h4>Others</h4>
          <a>
            <p>Terms of Services</p>
          </a>
          <a>
            <p>Privacy Policy</p>
          </a>
          <a>
            <p>License</p>
          </a>
        </div>
      </div>
      <div className="copyrights">
        copyrights
        <a href="https://github.com/RawanSayedd" target="_blank">
          Rawan Sayed Aly
        </a>
      </div>
    </div>
  );
}

export default Footer;
