export const categories = [
  { id: 'all', name: 'Tous les produits' },
  { id: 'casserole', name: 'Casserole' },
  { id: 'poele', name: 'Poêles' },
  { id: 'ustensiles', name: 'Ustensiles' },
  { id: 'accessoires', name: 'Accessoires' },
];

export const products = [
  {
    id: 1,
    name: 'Casserole Pro Inox 24cm',
    category: 'casserole',
    description: 'Casserole professionnelle en acier inoxydable 18/10, fond sandwich pour une distribution uniforme de la chaleur.',
    features: ['Acier inox 18/10', 'Fond sandwich', 'Poignées ergonomiques', 'Couvercle verre trempé'],
    specifications: {
        diameter: '24 cm',
        capacity: '4 L',
        material: 'Inox 18/10',
        weight: '1.5 kg',
        compatibility: ['Gaz', 'Induction', 'Électrique']
  },
  images: [
  '/images/casserole1.jpg',
  '/images/casserole2.jpg'
],
  usage: 'Idéale pour sauces, soupes et cuisson quotidienne.',
  },
  {
    id: 2,
    name: 'Poêle Aluminium 28cm',
    category: 'poele',
    badge: 'Nouveau',
    description: 'Poêle en aluminium forgé avec revestement antiadhésif granite. Idéale pour une cuisine saine.',
    features: ['Aluminium forgé', 'Revêtement granite', 'Manche bois', 'Induction compatible']
  },
  {
    id: 3,
    name: 'Set Ustensiles 7 pièces',
    category: 'ustensiles',
    badge: 'Promo',
    description: 'Ensemble complet d\'ustensiles de cuisine en acier inox. Comprend cuillère, spatule, louche et plus.',
    features: ['Acier inoxydable', '7 pièces', 'Prix promotions', 'Garantie 2 ans']
  },
  {
    id: 4,
    name: 'Casserole Basse 20cm',
    category: 'casserole',
    badge: null,
    description: 'Casserole basse pour sauces et risottos. Construction robuste avec fond épais.',
    features: ['Acier inox qualité', 'Fond épais', 'Écoulement précis', 'Lavable lave-vaisselle']
  },
  {
    id: 5,
    name: 'Poêle Crêpe 25cm',
    category: 'poele',
    badge: 'Best-seller',
    description: 'Poêle spéciale crêpes avec bord bas pour retourner facilement. Revêtement antiadhésif premium.',
    features: ['Bord bas pratique', 'Revêtement premium', 'Legère', 'Tous feux']
  },
  {
    id: 6,
    name: 'Marmite Industrielle 10L',
    category: 'casserole',
    badge: 'Pro',
    description: 'Marmite professionnelle grand volume pour cuisines commerciales. Construction heavy-duty.',
    features: ['10 litres', 'Usage professionnel', 'Construction heavy-duty', 'Surveillance included']
  },
  {
    id: 7,
    name: 'Spatule Cuisine Set',
    category: 'ustensiles',
    badge: null,
    description: 'Set de 3 spatules multi-usages. Résistantes à la chaleur et compatibles tous ustensiles.',
    features: ['Silicone alimentaire', 'Résiste 230°C', 'Set de 3', 'Couleurs variées']
  }
];
