import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat } from 'lucide-react';
import './Card.css';

const Card = ({ product, categoryName }) => {
  const {
    id,
    name,
    description,
    features = []
  } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <div className="product-image-placeholder">
          <ChefHat size={48} className="text-secondary" />
        </div>
        <div className="product-overlay text-center">
          <Link to={`/produits/${id}`} className="btn btn-dark btn-sm">
            Voir détails
          </Link>
        </div>
      </div>
      <div className="product-info">
        <p className="product-category mb-1">{categoryName}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-features d-none d-lg-flex gap-2 flex-wrap mb-3">
          {features.slice(0, 3).map((feature, i) => (
            <span key={i} className="feature-tag">{feature}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;