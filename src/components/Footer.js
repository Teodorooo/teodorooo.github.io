import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="footer-brand">Back2front</Link>
      <a
        href="https://teodoroesquerre.com/"
        target="_blank"
        rel="noreferrer"
        className="footer-copy"
      >
        Teodoro Esquerre © {new Date().getFullYear()}
      </a>
    </footer>
  );
}

export default Footer;
