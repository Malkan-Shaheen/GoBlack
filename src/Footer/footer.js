import React from 'react';
import './footer.css';
import logo from './../images/Logoo.png'; // Replace with your actual logo path
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      {/* Eclipse Blur Effect */}
      <div className="footer-eclipse"></div>

      <div className="footer-content">
        <img src={logo} alt="Project Black Logo" className="footer-logo" />

        <div className="footer-bottom">
          <p className="footer-left">
            Project Black © 2025 Copyright. All rights reserved.
          </p>

          <div className="footer-links">
            <button className="footer-link" onClick={() => navigate('/privacy')}>Privacy</button>
            <button className="footer-link" onClick={() => navigate('/terms')}>Terms</button>
           <button className="footer-icon" onClick={() => window.open('https://facebook.com/groups/1552740565408393/', '_blank')}>
  <i className="fab fa-facebook-f"></i>
</button>
<button className="footer-icon" onClick={() => window.open('https://www.instagram.com/officialprojectblack?igsh=YTNtMjl4NW9hbmcz', '_blank')}>
  <i className="fab fa-instagram"></i>
</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
