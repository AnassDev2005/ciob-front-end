import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products as staticProducts, categories as staticCategories } from '../../data';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = staticProducts.find(p => p.id === parseInt(id));
  const category = staticCategories.find(c => c.id === product?.category);

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h2>Produit non trouvé</h2>
        <Link to="/produits" className="btn btn-primary mt-3">Retour aux produits</Link>
      </div>
    );
  }

  return (
    <div className="py-5">
      <div className="container">
        <Link 
          to="/produits" 
          className="d-inline-flex align-items-center gap-2 text-decoration-none mb-4"
          style={{
            color: '#6c757d',
            fontSize: '14px',
            fontWeight: '500',
            padding: '8px 16px',
            borderRadius: '6px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            transition: 'all 0.2s ease'
          }}
        >
          <ArrowLeft size={18} />
          Retour aux produits
        </Link>

        <div className="row">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-detail-image bg-light d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
              <span className="text-muted">Image du produit</span>
            </div>
          </div>

          <div className="col-md-6">
            <p className="text-muted mb-2">{category?.name}</p>
            <h1 className="mb-3">{product.name}</h1>
            <p className="lead mb-4">{product.description}</p>

            <h5 className="mb-3">Caractéristiques</h5>
            <ul className="list-unstyled">
              {product.features.map((feature, index) => (
                <li key={index} className="d-flex align-items-center gap-2 mb-2">
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
