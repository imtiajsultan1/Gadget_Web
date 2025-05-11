import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const ProductContext = createContext();

// Sample product data with detailed specifications



// Provider component
export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching product data:', error);
      });
  }, []);

  const [activeCategory, setActiveCategory] = useState('All Products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);

  // Filter products based on the active category
  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowProductDetails(false); // Hide product details when changing category
  };

  // Handle product selection
  const handleProductClick = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setShowProductDetails(true);
  };

  // Go back to product list
  const handleBackToProducts = () => {
    setShowProductDetails(false);
  };

  return (
    <ProductContext.Provider 
      value={{ 
        products, 
        filteredProducts, 
        activeCategory, 
        selectedProduct,
        showProductDetails,
        handleCategoryClick, 
        handleProductClick,
        handleBackToProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook to use the context
export const useProductContext = () => useContext(ProductContext);