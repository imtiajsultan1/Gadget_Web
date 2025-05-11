import React from 'react';
import { FaArrowLeft, FaHeart, FaRegHeart, FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart } from 'react-icons/fa';
import { useShopContext } from '../../Context/ShopContext';

const ProductDetails = () => {
  const { 
    selectedProduct, 
    handleBackToProducts, 
    addToCart, 
    addToWishlist, 
    removeFromWishlist,
    isInWishlist,
    handleShowDashboard
  } = useShopContext();

  if (!selectedProduct) return null;

  // Render star ratings
  const renderRating = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct.id);
    handleShowDashboard('cart');
  };

  const handleToggleWishlist = () => {
    if (isInWishlist(selectedProduct.id)) {
      removeFromWishlist(selectedProduct.id);
    } else {
      addToWishlist(selectedProduct.id);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
     

      {/* Product Details Banner */}
      <section className="bg-purple-600 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
          <p className="max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            the coolest accessories, we have it all!
          </p>
        </div>
      </section>

      {/* Product Details Card */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <button 
            onClick={handleBackToProducts}
            className="flex items-center text-purple-600 mb-6 hover:underline"
          >
            <FaArrowLeft className="mr-2" /> Back to Products
          </button>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2 bg-gray-200 flex items-center justify-center p-6">
                <img 
                  src={`https://via.placeholder.com/400x400?text=${encodeURIComponent(selectedProduct.name)}`} 
                  alt={selectedProduct.name} 
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
              
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <p className="text-lg font-semibold mb-2">Price: ${selectedProduct.price.toFixed(2)}</p>
                
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-sm rounded-full ${
                    selectedProduct.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">Specifications:</h3>
                  <ul className="space-y-1">
                    {selectedProduct.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">{index + 1}.</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center">
                    <h3 className="font-semibold mr-2">Rating:</h3>
                    <div className="flex mr-2">
                      {renderRating(selectedProduct.rating)}
                    </div>
                    <span className="text-gray-600">{selectedProduct.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button 
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full flex items-center"
                    onClick={handleAddToCart}
                  >
                    Add To Cart
                  </button>
                  <button 
                    onClick={handleToggleWishlist} 
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    {isInWishlist(selectedProduct.id) ? (
                      <FaHeart className="text-red-500 text-xl" />
                    ) : (
                      <FaRegHeart className="text-gray-400 text-xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductDetails;