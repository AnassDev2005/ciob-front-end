import React, { useState, useRef, useEffect } from 'react';
import { 
  ChefHat, 
  Soup, 
  UtensilsCrossed, 
  Layers, 
  ShieldCheck,
  Star,
  Filter,
  Grid,
  List,
  ChevronDown
} from 'lucide-react';
import { products as staticProducts, categories as staticCategories } from '../../../data';
import './Products.css';

import Recette1 from '../../../assets/Images/produitR/Recette1.jpg';
import Recette2 from '../../../assets/Images/produitR/Recette2.jpg';
import Recette3 from '../../../assets/Images/produitR/Recette3.jpg';

const categories = staticCategories.map(cat => ({
  ...cat,
  icon: cat.id === 'all' ? <Layers size={20} /> :
        cat.id === 'casserole' ? <Soup size={20} /> :
        cat.id === 'poele' ? <ChefHat size={20} /> :
        cat.id === 'ustensiles' ? <UtensilsCrossed size={20} /> :
        <ShieldCheck size={20} />
}));

const products = staticProducts;

const heroImages = [Recette1, Recette2, Recette3];

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

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="products-wrapper">
      <FadeInSection>
        <div className="products-hero">
          <div className="hero-slideshow">
            {heroImages.map((image, index) => (
              <div 
                key={index}
                className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
            <div className="hero-overlay" />
          </div>
          <div className="container text-center py-5 position-relative">
            <h1 className="display-3 fw-bold products-hero-title mb-3">
              NOS PRODUITS
            </h1>
            <p className="lead products-hero-subtitle mx-auto">
              Découvrez notre gamme complète d'ustensiles de cuisine professionnels, 
              conçus pour les chefs les plus exigeants.
            </p>
          </div>
        </div>
      </FadeInSection>

      <section className="products-content py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <FadeInSection>
                <div className="filters-sidebar">
                  <div className="filters-header d-flex align-items-center gap-2 mb-4">
                    <Filter size={20} className="text-danger" />
                    <h4 className="fw-bold mb-0">Filtres</h4>
                  </div>
                  
                  <div className="filter-group mb-4">
                    <h5 className="filter-title mb-3">Catégories</h5>
                    <div className="category-list">
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                          onClick={() => setActiveCategory(cat.id)}
                        >
                          {cat.icon}
                          <span>{cat.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="filter-group">
                    <h5 className="filter-title mb-3">Prix</h5>
                    <div className="price-range">
                      <input type="range" min="0" max="1000" className="price-slider" />
                      <div className="price-labels d-flex justify-content-between">
                        <span>0 DH</span>
                        <span>2000 DH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="col-lg-9">
              <FadeInSection>
                <div className="products-toolbar d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                  <p className="results-count mb-0">
                    Affichage de <strong>{filteredProducts.length}</strong> produit{filteredProducts.length > 1 ? 's' : ''}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <div className="sort-dropdown">
                      <select 
                        className="form-select form-select-sm"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                      >
                        <option value="popular">Les plus populaires</option>
                        <option value="newest">Les plus récents</option>
                        <option value="price-low">Prix croissant</option>
                        <option value="price-high">Prix décroissant</option>
                      </select>
                    </div>
                    <div className="view-toggle d-flex gap-1">
                      <button 
                        className={`btn btn-sm ${viewMode === 'grid' ? 'btn-warning' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid size={18} />
                      </button>
                      <button 
                        className={`btn btn-sm ${viewMode === 'list' ? 'btn-warning' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode('list')}
                      >
                        <List size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {filteredProducts.map((product, index) => (
                  <FadeInSection key={product.id} delay={(index % 4) + 1}>
                    <div className="product-card">
                      <div className="quick-actions">
                        <button className="quick-action-btn" title="Favoris">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        </button>
                        <button className="quick-action-btn" title="Comparer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"/><path d="M8 21H3v-5"/><path d="M21 3l-7 7"/><path d="M3 21l7-7"/></svg>
                        </button>
                        <button className="quick-action-btn" title="Partager">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
                        </button>
                      </div>
                      <div className="product-image">
                        <div className="product-image-placeholder">
                          <ChefHat size={48} className="text-secondary" />
                        </div>
                        <div className="product-overlay">
                          <button className="btn btn-light btn-sm">Voir détails</button>
                          <button className="btn btn-outline-light btn-sm">Ajouter au panier</button>
                        </div>
                      </div>
                      <div className="product-info">
                        <p className="product-category mb-1">
                          {categories.find(c => c.id === product.category)?.name}
                        </p>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-description">{product.description}</p>
                        <div className="product-features d-none d-lg-flex gap-2 flex-wrap mb-3">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <span key={i} className="feature-tag">
                              <ShieldCheck size={12} /> {feature}
                            </span>
                          ))}
                        </div>
                        <div className="product-rating mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < product.rating ? '#ef4444' : 'none'}
                              stroke={i < product.rating ? '#ef4444' : '#d1d5db'}
                            />
                          ))}
                          <span className="reviews-count">({product.reviews})</span>
                        </div>
                        <div className="product-price">
                          <span className="current-price">{product.price} DH</span>
                          {product.oldPrice && (
                            <>
                              <span className="old-price">{product.oldPrice} DH</span>
                              <span className="discount-badge">
                                -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                              </span>
                            </>
                          )}
                        </div>
                        <div className="product-actions">
                          <button className="btn btn-warning w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                            Ajouter au panier
                          </button>
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
