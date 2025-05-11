import React, { createContext, useState, useContext, useEffect } from 'react';
import { use } from 'react';

// Create the context
const ShopContext = createContext();


// Sample product data with detailed specifications
// const productData = []

// Provider component
export const ShopProvider = ({ children }) => {

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
  const [showDashboard, setShowDashboard] = useState(false);
  const [showStatistics, setShowStatistics] = useState(false);
  const [activeTab, setActiveTab] = useState('cart'); // 'cart' or 'wishlist'
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Calculate total cost of items in cart
  const cartTotal = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  // Filter products based on the active category
  const filteredProducts = activeCategory === 'All Products' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Handle category selection
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setShowProductDetails(false);
    setShowDashboard(false);
    setShowStatistics(false);
  };

  // Handle product selection
  const handleProductClick = (productId) => {
    const product = products.find(p => p.id === productId);
    setSelectedProduct(product);
    setShowProductDetails(true);
    setShowDashboard(false);
    setShowStatistics(false);
  };

  // Go back to product list
  const handleBackToProducts = () => {
    setShowProductDetails(false);
    setShowDashboard(false);
    setShowStatistics(false);
  };

  // Show dashboard
  const handleShowDashboard = (tab = 'cart') => {
    setActiveTab(tab);
    setShowDashboard(true);
    setShowProductDetails(false);
    setShowStatistics(false);
  };

  // Show statistics
  const handleShowStatistics = () => {
    setShowStatistics(true);
    setShowDashboard(false);
    setShowProductDetails(false);
  };

  // Add to cart
  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      setCart(prevCart => [...prevCart, product]);
      // Remove from wishlist if it's there
      setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
    }
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    // Find the index of the first occurrence of the product
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      const newCart = [...cart];
      newCart.splice(index, 1); // Remove only one occurrence
      setCart(newCart);
    }
  };

  // Add to wishlist
  const addToWishlist = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product && !wishlist.some(item => item.id === productId)) {
      setWishlist(prevWishlist => [...prevWishlist, product]);
    }
  };

  // Remove from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };

  // Check if product is in cart
  const isInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  // Check if product is in wishlist
  const isInWishlist = (productId) => {
    return wishlist.some(item => item.id === productId);
  };

  // Sort cart by price
  const sortCartByPrice = () => {
    setCart([...cart].sort((a, b) => a.price - b.price));
  };

  // Complete purchase
  const completePurchase = () => {
    // Here you would typically send the order to a backend API
    // For now, we'll just clear the cart
    setCart([]);
  };

  return (
    <ShopContext.Provider 
      value={{ 
        products, 
        filteredProducts, 
        activeCategory,
        selectedProduct,
        showProductDetails,
        showDashboard,
        showStatistics,
        activeTab,
        cart,
        wishlist,
        cartTotal,
        handleCategoryClick, 
        handleProductClick,
        handleBackToProducts,
        handleShowDashboard,
        handleShowStatistics,
        setActiveTab,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
        isInCart,
        isInWishlist,
        sortCartByPrice,
        completePurchase
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the context
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShopContext must be used within a ShopProvider');
  }
  return context;
};