
import React from 'react';
import "./Footer.css";
import footer from '../../assests/footer-logo.png';
import fb from '../../assests/facebook.png';
import LI from '../../assests/LI.png';
import twitter from '../../assests/twitter.png';
import Yt from '../../assests/yt.png';
import insta from '../../assests/insta.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-main-div1">
        <img src={footer}/>
          <p>InvestSphere Company Limited,</p>
          <p>House No. 26, Green Meadows Colony Sector 10, Rajendra Nagar</p>
          <p>Jaipur, Rajasthan. Pin Code: 302017</p>
          <p>Email: customersupport@icicilombard.com | Fax no - 022 61961323</p>
        <div className="footer-icons">
          <a href="#"><img src={fb}/></a>
          <a href="#"><img src={LI}/></a>
          <a href="#"><img src={twitter}/></a>
          <a href="#"><img src={Yt}/></a>
          <a href="#"><img src={insta}/></a>
        </div>
      </div>

      <div className="footer-main-div2">
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="footer-links">
          <h4>QuickLinks</h4>
          <p>Home &gt;&gt; Car Insurance | TwoWheeler Insurance | Health Insurance | Travel Insurance | Other Insurance | Claims</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
