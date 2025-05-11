import React, { useState } from 'react';
import { useShopContext } from '../../Context/ShopContext';
import { FaTimes } from 'react-icons/fa';
import Wishlist from '../WishList/WishList';
import PurchaseModal from '../PurcheaseModal/Purchease';

const Dashboard = () => {
  const { 
    activeTab, 
    setActiveTab, 
    cart, 
    cartTotal, 
    removeFromCart, 
    sortCartByPrice,
    handleBackToProducts,
    completePurchase
  } = useShopContext();

  const [showModal, setShowModal] = useState(false);

  // Handle purchase
  const handlePurchase = () => {
    if (cart.length > 0) {
      completePurchase();
      setShowModal(true);
    }
  };

  // Close modal and continue shopping
  const handleCloseModal = () => {
    setShowModal(false);
    handleBackToProducts();
  };

  // If the active tab is wishlist, render the Wishlist component
  if (activeTab === 'wishlist') {
    return <Wishlist />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Purchase Modal */}
      <PurchaseModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
        total={cartTotal} 
      />

   

      {/* Dashboard Banner */}
      <section className="bg-purple-600 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <p className="max-w-2xl mx-auto mb-6">
            Explore the latest gadgets that will take your experience to the next level. From smart devices to
            the coolest accessories, we have it all!
          </p>
          
          {/* Tabs */}
          <div className="flex justify-center space-x-4 mt-4">
            <button 
              className="px-8 py-2 rounded-full bg-white text-purple-600 font-medium"
            >
              Cart
            </button>
            <button 
              className="px-8 py-2 rounded-full bg-transparent border border-white text-white"
              onClick={() => setActiveTab('wishlist')}
            >
              Wishlist
            </button>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-8 px-4 bg-gray-50 flex-grow">
        <div className="container mx-auto">
          {/* Cart Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Cart</h2>
            <div className="flex items-center space-x-4">
              <div className="font-medium">Total cost: ${cartTotal}</div>
              <button 
                className="bg-white border border-purple-600 text-purple-600 px-4 py-1 rounded-full text-sm hover:bg-purple-50"
                onClick={sortCartByPrice}
              >
                Sort by Price
              </button>
              <button 
                className={`bg-purple-600 text-white px-6 py-1 rounded-full text-sm hover:bg-purple-700 ${
                  cart.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handlePurchase}
                disabled={cart.length === 0}
              >
                Purchase
              </button>
            </div>
          </div>

          {/* Cart Items */}
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                  <div className="w-24 h-24 bg-gray-200 mr-4 flex-shrink-0">
                    <img 
                      src={`https://via.placeholder.com/100x100?text=${encodeURIComponent(item.name)}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <p className="text-sm font-medium mt-1">Price: ${item.price.toFixed(2)}</p>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-red-500 p-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Your cart is empty.</p>
            </div>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default Dashboard;