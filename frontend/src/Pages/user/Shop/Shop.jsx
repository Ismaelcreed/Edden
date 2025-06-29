import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { Search, ShoppingCart, Star, CreditCard, Sword, Shield as ShieldIcon, Scroll, FlaskConical, Cross, Skull } from 'lucide-react';
import SparklesText from '../../../Components/SparkleText/SparkleText';
import { mockProducts } from '../../../data/mockProducts';
import './Shop.scss';


const categories = [
  "Tous",
  "Armes Divines",
  "Artéfacts Mystiques",
  "Reliques Sacrées",
  "Artéfacts Alchimiques",
  "Armes Légendaires",
  "Artéfacts Bibliques"
];


function Shop() {
  const [products, setProducts] = useState(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("default");
   const navigate = useNavigate();

  // Filtrage et recherche
  useEffect(() => {
    let filtered = products;

    // Filtrage par catégorie
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Recherche par nom
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Tri
    
    switch (sortBy) {
      case 'price-asc':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy, products]);

   const handleProductClick = (product) => {
    navigate(`/edden-app/shop-edden/product/${product.id}`); // Rediriger vers la page de détails
  };

  const handlePaymentInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const handleCardNumberChange = (e) => {
    const formatted = formatCardNumber(e.target.value);
    setPaymentData(prev => ({
      ...prev,
      cardNumber: formatted
    }));
  };

  const handlePayment = () => {
    // Simulation du paiement
    alert(`Paiement de ${selectedProduct.price}Ar en cours...`);
    setShowPaymentModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="shop-container">
      {/* Header avec recherche */}
      <div className="shop-header">
      
        <div className="header-content">
          <motion.h1
            className="shop-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          <SparklesText className="custom-texte">
            Edden Boutique
          </SparklesText>
          </motion.h1>
          <p className="shop-subtitle">Découvrez nos produits premium</p>

          <div className="search-section">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filters">
              <div className="category-filter">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grille des produits */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-overlay">
                <ShoppingCart className="cart-icon" />
                <span>Acheter maintenant</span>
              </div>
            </div>

            <div className="product-info">
              <div className="product-category">
                {product.category === "Armes Divines" && <Sword size={16} className="category-icon" />}
                {product.category === "Artéfacts Mystiques" && <Scroll size={16} className="category-icon" />}
                {product.category === "Reliques Sacrées" && <Cross size={16} className="category-icon" />}
                {product.category === "Artéfacts Alchimiques" && <FlaskConical size={16} className="category-icon" />}
                {product.category === "Armes Légendaires" && <Sword size={16} className="category-icon" />}
                {product.category === "Artéfacts Bibliques" && <Skull size={16} className="category-icon" />}
                <span>{product.category}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>

              {/* <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                    />
                  ))}
                  <span className="rating-text">{product.rating} ({product.reviews})</span>
                </div>
              </div> */}

              <div className="product-pricing">
                <div className="current-price">{product.price} Ar</div>
                {product.originalPrice && (
                  <div className="original-price">{product.originalPrice} Ar</div>
                )}
              </div>

              <div className="product-stock">
                <span className={`stock-indicator ${product.stock < 10 ? 'low' : ''}`}>
                  {product.stock} en stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <h3>Aucun produit trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
}

export default Shop;