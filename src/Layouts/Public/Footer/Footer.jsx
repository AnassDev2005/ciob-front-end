import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import logoCiob from '../../../assets/Images/Logo/ciob.jpg';

const Footer = () => {
  return (
    <footer className="bg-light pt-5 pb-4 border-top">
      <div className="container px-lg-5">
        <div className="row gy-4">
          
          {/* Section Logo & Description */}
          <div className="col-lg-3 col-md-6">
            <img src={logoCiob} alt="CIOB" style={{ height: '35px', objectFit: 'contain' }} />
            <p className="text-secondary small lh-lg">
              Précision technique pour les maîtres culinaires. Le premier partenaire industriel du Maroc depuis 1984.
            </p>
          </div>

          {/* Liens Rapides */}
          <div className="col-lg-2 col-md-6">
            <h6 className="fw-bold small mb-4 text-uppercase" style={{ letterSpacing: '1px' }}>Liens Rapides</h6>
            <ul className="list-unstyled d-grid gap-2">
              <li><Link to="/produits" onClick={() => window.scrollTo(0, 0)} className="text-decoration-none text-secondary small">Produits</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-decoration-none text-secondary small">À propos</Link></li>
              <li><Link to="/certifications" onClick={() => window.scrollTo(0, 0)} className="text-decoration-none text-secondary small">Certifications</Link></li>
            </ul>
          </div>

          {/* Légal & Technique */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold small mb-4 text-uppercase" style={{ letterSpacing: '1px' }}>Légal & Technique</h6>
            <ul className="list-unstyled d-grid gap-2">
              <li><a href="#" className="text-decoration-none text-secondary small">Politique de confidentialité</a></li>
              <li><a href="#" className="text-decoration-none text-secondary small">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-decoration-none text-secondary small">Spécifications techniques</a></li>
              <li><a href="#" className="text-decoration-none text-secondary small">Expédition & Logistique</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold small mb-4 text-uppercase" style={{ letterSpacing: '1px' }}>Newsletter</h6>
            <p className="text-secondary small">Rejoignez l'élite industrielle pour les mises à jour des produits.</p>
            <div className="mt-4 position-relative border-bottom pb-2">
              <input 
                type="email" 
                placeholder="Adresse Email" 
                className="form-control border-0 bg-transparent p-0 shadow-none small"
              />
              <ArrowRight 
                size={20} 
                className="position-absolute end-0 top-0 text-dark cursor-pointer" 
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>

        </div>

        {/* Copyright & Statut */}
        <hr className="my-5 text-muted opacity-25" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-secondary mb-0" style={{ fontSize: '12px' }}>
            © 2024 CIOB MAROC. Tous droits réservés.
          </p>
          <div className="d-flex align-items-center gap-2 mt-3 mt-md-0">
            <span className="rounded-circle bg-success" style={{ width: '8px', height: '8px' }}></span>
            <span className="text-secondary text-uppercase fw-bold" style={{ fontSize: '10px', letterSpacing: '1px' }}>
              TOUS LES SYSTÈMES SONT OPÉRATIONNELS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;