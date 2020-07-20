import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-box">
        <h3 className="questions">Have questions?</h3>
        <button className="contact-btn">Contact Intueat</button>
      </div>
      <div className="ending-info">
        <small>INTUEAT ©2020 ALL RIGHTS RESERVED</small>
        <div>
          <small>PRIVACY POLICY</small>
          <small>TERMS AND CONDITIONS</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer;