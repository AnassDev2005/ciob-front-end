import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { products, categories } from '../../../data';
import { 
  Shield, 
  Clock, 
  MapPin, 
  Building2, 
  Truck, 
  Award,
  ChevronRight,
  Package,
  Quote
} from 'lucide-react';

const allProducts = products;

const getCategoryName = (categoryId) => {
  const category = categories.find(c => c.id === categoryId);
  return category ? category.name : categoryId;
};

const FadeInSection = ({ children, className = '', delay = 0 }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const delayClass = delay > 0 ? `fade-in-delay-${delay}` : '';

  return (
    <div
      ref={sectionRef}
      className={`fade-in-section ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  return (
    <div className="home-wrapper">
      <FadeInSection>
        <div className="top-bar py-2 text-center">
          FONDÉ EN 1984 | FÈS, MAROC
        </div>
      </FadeInSection>

      <section className="hero-section py-5">
        <FadeInSection>
          <div className="container py-5 text-center">
            <h1 className="display-3 fw-bold mb-3 hero-title">
              USTENSILES DE CUISINE DE HAUTE QUALITÉ
            </h1>
            <div className="mx-auto mb-4 hero-divider"></div>
            <p className="display-6 fw-light mb-4 hero-subtitle">
              FABRIQUÉS AU MAROC
            </p>
            <p className="lead hero-description mx-auto" style={{ maxWidth: '600px' }}>
              L'excellence industrielle marocaine depuis 1984.
              Outils de précision pour le paysage culinaire moderne.
            </p>
            <div className="d-flex gap-3 justify-content-center mt-5 flex-wrap">
              <Link to="/produits" className="btn hero-btn-secondary btn-lg px-4 d-flex align-items-center gap-2">
                <Package size={20} /> EXPLORER LES PRODUITS
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="products-marquee-section py-5">
        <FadeInSection>
          <div className="container mb-4">
            <h2 className="display-5 fw-bold text-center mb-3 products-marquee-title">NOS PRODUITS</h2>
            <p className="products-marquee-subtitle">Découvrez notre sélection d'ustensiles de cuisine professionnels</p>
          </div>
        </FadeInSection>
        <div className="products-marquee-wrapper">
          <div className="products-marquee-track">
            {[...products, ...products].map((product, index) => (
              <Link to={`/produits/${product.id}`} key={`${product.id}-${index}`} className="product-marquee-card">
                <div className="product-marquee-placeholder">
                  <Package size={48} />
                </div>
                <div className="product-marquee-content">
                  <span className="product-marquee-category">{getCategoryName(product.category)}</span>
                  <h4 className="product-marquee-name">{product.name}</h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <FadeInSection>
          <div className="text-center mt-4">
            <Link to="/produits" className="btn btn-outline-primary px-4">
              VOIR TOUS LES PRODUITS <ChevronRight size={18} />
            </Link>
          </div>
        </FadeInSection>
      </section>

      <section className="pillars-section py-5">
        <div className="container">
          <div className="row g-4">
            <FadeInSection className="col-md-4">
              <div className="pillar-card text-center h-100">
                <div className="pillar-icon">
                  <Shield size={36} className="text-danger" />
                </div>
                <h3 className="h4 fw-bold mb-2 pillar-title">MATÉRIAUX DE QUALITÉ</h3>
                <p className="text-secondary pillar-description">
                  Approvisionnés auprès de fournisseurs premium, nos alliages d'inox et d'aluminium répondent aux normes européennes strictes de sécurité et de durabilité.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection className="col-md-4" delay={1}>
              <div className="pillar-card text-center h-100">
                <div className="pillar-icon">
                  <Clock size={36} className="text-danger" />
                </div>
                <h3 className="h4 fw-bold mb-2 pillar-title">PRODUITS DURABLES</h3>
                <p className="text-secondary pillar-description">
                  Conçus pour durer, pas pour une saison. Nos produits résistent à l'intensité des cuisines commerciales et résidentielles à grand volume.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection className="col-md-4" delay={2}>
              <div className="pillar-card text-center h-100">
                <div className="pillar-icon">
                  <MapPin size={36} className="text-danger" />
                </div>
                <h3 className="h4 fw-bold mb-2 pillar-title">FABRIQUÉ AU MAROC</h3>
                <p className="text-secondary pillar-description">
                  Une marque de fierté. Soutenant l'artisanat local tout en offrant une ingénierie de classe mondiale depuis notre usine à Fès.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="rooted-section py-5">
        <FadeInSection>
          <div className="container text-center" style={{ maxWidth: '800px' }}>
            <h2 className="display-5 fw-bold mb-3 rooted-title">ANCRÉ DANS L'INDUSTRIE MAROCAINE</h2>
            <div className="bg-warning mx-auto mb-4 rooted-divider"></div>
            <p className="lead fst-italic text-secondary mb-4 rooted-quote">
              "Depuis 1984, CIOB MAROC est à l'avant-garde de la révolution industrielle du Royaume, transformant les matières premières en art culinaire."
            </p>
            <p className="text-secondary rooted-text">
              Basée dans le centre industriel historique de Fès, notre usine combine le dévouement traditionnel marocain avec la technologie d'usinage allemande de pointe. Nous ne nous contentons pas de fabriquer des ustensiles de cuisine; nous créons les instruments de l'hospitalité marocaine.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              <FadeInSection delay={1}>
                <span className="rooted-badge d-flex align-items-center gap-2">
                  <Award size={16} className="text-danger" />
                  <span className="badge-label">NORMES DE FABRICATION ISO 9001:2015</span>
                </span>
              </FadeInSection>
              <FadeInSection delay={2}>
                <span className="rooted-badge d-flex align-items-center gap-2">
                  <Shield size={16} className="text-danger" />
                  <span className="badge-label">MÉTAUX APPROVISIONNÉS DURABLEMENT</span>
                </span>
              </FadeInSection>
              <FadeInSection delay={3}>
                <span className="rooted-badge d-flex align-items-center gap-2">
                  <Clock size={16} className="text-danger" />
                  <span className="badge-label">PLUS DE 30 ANS D'EXPÉRIENCE</span>
                </span>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </section>

      <section className="retail-section py-5">
        <div className="container">
          <div className="row g-4">
            <FadeInSection className="col-md-6">
              <div className="retail-card">
                <h3 className="h4 fw-bold mb-3 retail-title">POINTS DE VENTE</h3>
                <p className="text-secondary mb-3 retail-description">
                  Disponible auprès des principaux distributeurs marocains et grandes surfaces du royaume.
                </p>
                <p className="retail-highlight mb-0">TROUVEZ-NOUS CHEZ MARJANE ET AUTRES GRANDES SURFACES.</p>
              </div>
            </FadeInSection>
            <FadeInSection className="col-md-6" delay={1}>
              <div className="retail-card">
                <h3 className="h4 fw-bold mb-3 retail-title">CERTIFICATIONS & QUALITÉ</h3>
                <div className="d-flex gap-3 flex-wrap">
                  <span className="cert-tag">
                    <Award size={18} className="text-danger" /> ISO 9001:2015
                  </span>
                  <span className="cert-tag">
                    <Building2 size={18} className="text-danger" /> PARTENAIRE OFFICIEL
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="showroom-section py-5">
        <div className="container">
          <div className="row g-4">
            <FadeInSection className="col-md-6">
              <div className="showroom-card">
                <MapPin size={48} className="showroom-icon mb-3" />
                <h3 className="h4 fw-bold mb-2 showroom-title">SHOWROOMS</h3>
                <p className="text-secondary mb-0 showroom-description">
                  Visitez nos magasins d'usine exclusifs à Fès.
                </p>
              </div>
            </FadeInSection>
            <FadeInSection className="col-md-6" delay={1}>
              <div className="showroom-card">
                <Truck size={48} className="showroom-icon mb-3" />
                <h3 className="h4 fw-bold mb-2 showroom-title">FOURNITURE B2B</h3>
                <p className="text-secondary mb-0 showroom-description">
                  Logistique industrielle pour hôtels et restaurants à travers l'Afrique.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="testimonial-section py-5">
        <FadeInSection>
          <div className="container text-center" style={{ maxWidth: '700px' }}>
            <Quote size={56} className="text-danger mb-4" />
            <p className="fs-3 fw-light fst-italic mb-4 testimonial-quote">
              "Les produits Titanic représentent le sommet de la capacité industrielle marocaine. Nous utilisons leur gamme professionnelle dans notre académie culinaire depuis plus d'une décennie sans aucun échec."
            </p>
            <p className="fw-bold mb-1 testimonial-author">KARIM BENNANI</p>
            <p className="testimonial-role">Chef Exécutif, L'Atlas Culinaire</p>
          </div>
        </FadeInSection>
      </section>

      <section className="factory-section py-5">
        <FadeInSection>
          <div className="container" style={{ maxWidth: '900px' }}>
            <h2 className="display-5 fw-bold text-center mb-3 factory-title">NOTRE USINE À FÈS</h2>
            <div className="mx-auto mb-4" style={{ width: '60px', height: '4px', borderRadius: '2px', background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)' }}></div>
            <div className="factory-card">
              <div className="factory-map-placeholder">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.1533559695113!2d-5.0766661!3d33.988594500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda02182eedc115f%3A0xc1776effec2047da!2sCiob!5e0!3m2!1sfr!2sma!4v1775745559625!5m2!1sfr!2sma" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte de l'usine"
                ></iframe>
              </div>
              <div className="p-4">
                <div className="row">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <h5 className="fw-bold mb-2 d-flex align-items-center gap-2 factory-info-title">
                      <MapPin size={18} className="text-danger" /> ADRESSE PHYSIQUE
                    </h5>
                    <p className="text-secondary mb-0 factory-info-text">
                      Zone Industrielle, Sidi Brahim, Fès, Maroc
                    </p>
                  </div>
                  <div className="col-md-6">
                    <h5 className="fw-bold mb-2 d-flex align-items-center gap-2 factory-info-title">
                      <Building2 size={18} className="text-danger" /> CONTACT DIRECT
                    </h5>
                    <p className="text-secondary mb-0 factory-info-text">+212 535 729 168</p>
                    <p className="text-primary mb-0 factory-info-text">contact@ciobmaroc.ma</p>
                  </div>
                </div>
                <a href="https://maps.app.goo.gl/wd5tg9hgKfS4mcJQA" target="_blank" rel="noopener noreferrer" className="factory-link mt-3 d-inline-flex align-items-center gap-1">
                  VOIR SUR GOOGLE MAPS <ChevronRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </section>
    </div>
  );
};

export default Home;
