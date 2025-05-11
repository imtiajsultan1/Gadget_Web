import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useShopContext } from '../../Context/ShopContext';

const Wishlist = () => {
  const { 
    wishlist, 
    removeFromWishlist, 
    addToCart,
    setActiveTab
  } = useShopContext();

  return (
    <div className="bg-gray-50 min-h-screen">


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
              className="px-8 py-2 rounded-full bg-transparent border border-white text-white"
              onClick={() => setActiveTab('cart')}
            >
              Cart
            </button>
            <button 
              className="px-8 py-2 rounded-full bg-white text-purple-600 font-medium"
            >
              Wishlist
            </button>
          </div>
        </div>
      </section>

      {/* Wishlist Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <h2 className="text-xl font-bold mb-6">Wishlist</h2>
          
          {wishlist.length > 0 ? (
            <div className="space-y-4">
              {wishlist.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex items-start">
                  <div className="w-24 h-24 bg-gray-200 mr-4 flex-shrink-0">
                    <img 
                      src={`https://via.placeholder.com/100x100?text=${encodeURIComponent(item.name)}`} 
                      alt={item.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">Description: {item.description}</p>
                    <p className="text-sm font-medium mb-3">Price: ${item.price.toFixed(2)}</p>
                    <button 
                      className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm hover:bg-purple-700"
                      onClick={() => addToCart(item.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-red-500 p-2"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Your wishlist is empty.</p>
            </div>
          )}
        </div>
      </section>

   
    </div>
  );
};

export default Wishlist;