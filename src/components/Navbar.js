import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/me', label: 'Who am I' },
  { to: '/projects', label: 'Projects' },
  { to: '/videos', label: 'Videos' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo__brand">Back2front</span>
          <span className="navbar-logo__sub">Teodoro Esquerre</span>
        </Link>

        <button
          className="navbar-burger"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
        </button>

        <ul className={`navbar-menu${open ? ' navbar-menu--open' : ''}`}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`navbar-link${pathname === to ? ' navbar-link--active' : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
