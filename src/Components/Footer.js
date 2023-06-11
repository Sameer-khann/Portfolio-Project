import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className='footer-items'>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </nav>
        <br/>
        <p>© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
