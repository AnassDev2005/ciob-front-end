import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import './Header.css';
import logoTitanic from '../../../assets/Images/Logo/titanic.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      document.body.classList.toggle('fixed-nav-active', isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('fixed-nav-active');
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const navLinkClass = (path) => {
    const base = 'nav-link';
    if (isActive(path)) {
      return `${base} active fw-bold text-dark border-bottom border-2 border-danger`;
    }
    return `${base} text-secondary`;
  };

  return (
    <div className="header-wrapper">
      <nav className={`navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 ${scrolled ? 'fixed-nav' : ''}`}>
        <div className="container-fluid px-5">
          
          <button 
            className="navbar-toggler border-0 bg-transparent me-3" 
            type="button" 
            onClick={() => isOpen ? handleClose() : setIsOpen(true)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logoTitanic} alt="TITANIC" style={{ height: '40px', objectFit: 'contain' }} />
          </Link>

          <div className={`collapse navbar-collapse justify-content-center ${isOpen || isClosing ? 'show' : ''} ${isClosing ? 'closing' : ''}`}>
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link className={navLinkClass('/')} to="/" onClick={() => { handleClose(); window.scrollTo(0, 0); }}>Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className={navLinkClass('/produits')} to="/produits" onClick={() => { handleClose(); window.scrollTo(0, 0); }}>Produits</Link>
              </li>
              <li className="nav-item">
                <Link className={navLinkClass('/about')} to="/about" onClick={() => { handleClose(); window.scrollTo(0, 0); }}>À propos</Link>
              </li>
              <li className="nav-item">
                <Link className={navLinkClass('/certifications')} to="/certifications" onClick={() => { handleClose(); window.scrollTo(0, 0); }}>Certifications</Link>
              </li>
              <li className="nav-item">
                <Link className={navLinkClass('/emplacements')} to="/emplacements" onClick={() => { handleClose(); window.scrollTo(0, 0); }}>Emplacements</Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-4">
            <button className="btn btn-link text-dark p-0 border-0 bg-transparent">
              <Search size={22} strokeWidth={1.5} />
            </button>
          </div>

        </div>
        
        {(isOpen || isClosing) && (
          <div 
            className={`menu-overlay ${isClosing ? 'closing' : ''}`}
            onClick={handleClose}
          />
        )}
      </nav>
    </div>
  )
}

export default Header