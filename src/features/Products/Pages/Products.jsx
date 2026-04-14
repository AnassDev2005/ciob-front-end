import React, { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import {
  ChefHat,
  Soup,
  UtensilsCrossed,
  Layers,
  ShieldCheck,
  Filter,
  Grid,
  List,
  Package,
  Search,
  ArrowRight
} from 'lucide-react';
import { products as staticProducts, categories as staticCategories } from '../../../data';
import Card from '../../../Components/Card/Card';
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const filteredProducts = products
    .filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch = !searchQuery || 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

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

                  
                </div>
              </FadeInSection>
            </div>

            <div className="col-lg-9">
              <FadeInSection>
                <div className="products-toolbar d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <p className="results-count mb-0">
                      Affichage de <strong>{filteredProducts.length}</strong> produit{filteredProducts.length > 1 ? 's' : ''}
                    </p>
                    {searchQuery && (
                      <button 
                        className="search-clear-btn"
                        onClick={() => {
                          const params = new URLSearchParams(searchParams);
                          params.delete('search');
                          navigate(`/produits?${params.toString()}`);
                        }}
                      >
                        <X size={14} />
                        <span>Recherche: "{searchQuery}"</span>
                      </button>
                    )}
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="view-toggle d-flex gap-1">
                      <button 
                        className={`btn btn-sm ${viewMode === 'grid' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid size={18} />
                      </button>
                      <button 
                        className={`btn btn-sm ${viewMode === 'list' ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode('list')}
                      >
                        <List size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeInSection>

              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {filteredProducts.length === 0 ? (
                  <div className="no-products-message">
                    <Package size={64} strokeWidth={1.5} />
                    <h3>Aucun produit trouvé</h3>
                    <p>
                      {searchQuery 
                        ? `Aucun résultat pour "${searchQuery}". Essayez une autre recherche.`
                        : "Aucun produit disponible dans cette catégorie."}
                    </p>
                    {searchQuery && (
                      <button
                        className="no-products-btn"
                        onClick={() => {
                          const params = new URLSearchParams(searchParams);
                          params.delete('search');
                          navigate(`/produits?${params.toString()}`);
                        }}
                      >
                        Réinitialiser la recherche
                      </button>
                    )}
                  </div>
                ) : (
                  filteredProducts.map((product, index) => (
                    <FadeInSection key={product.id} delay={(index % 4) + 1}>
                      <Card
                        product={product}
                        categoryName={categories.find(c => c.id === product.category)?.name}
                      />
                    </FadeInSection>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
