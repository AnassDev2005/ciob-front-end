import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products as staticProducts, categories as staticCategories } from '../../data';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const product = staticProducts.find(p => p.id === parseInt(id));
  const category = staticCategories.find(c => c.id === product?.category);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Produit non trouvé</h2>
        <Link to="/produits" className="btn btn-primary mt-3">Retour aux produits</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-wrapper py-5">
      <div className="container">
        <Link 
          to="/produits" 
          className="back-btn"
        >
          <ArrowLeft size={18} />
          Retour aux produits
        </Link>

        <div className="row mt-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-detail-image">
              <span className="text-muted">Image du produit</span>
            </div>
          </div>

          <div className="col-md-6">
            <p className="product-detail-category">{category?.name}</p>
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>

            <h5 className="product-detail-features-title">Caractéristiques</h5>
            <ul className="list-unstyled">
              {product.features.map((feature, index) => (
                <li key={index} className="product-detail-feature d-flex align-items-center gap-2">
                  <ShieldCheck size={18} className="text-success" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;