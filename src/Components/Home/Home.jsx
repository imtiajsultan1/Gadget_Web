
import { FaChevronRight, FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import ProductDetails from '../ProductDetails/ProductDetails';
import Dashboard from '../Dashboard/Dashboard';
import Statistics from '../Statistics/Statistics';
import { useShopContext } from '../../Context/ShopContext';
import img from '../../assets/banner.jpg';


function Home() {
  const {
    filteredProducts,
    activeCategory,
    showProductDetails,
    showDashboard,
    showStatistics,
    handleCategoryClick,
    handleProductClick,
    addToCart,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    handleShowDashboard,
    handleShowStatistics
  } = useShopContext();


  if (showProductDetails) {
    return <ProductDetails />;
  }


  if (showDashboard) {
    return <Dashboard />;
  }


  if (showStatistics) {
    return <Statistics />;
  }


  const categories = [
    'All Products',
    'Laptops',
    'Phones',
    'Accessories',
    'Smart Watches',
    'Earbuds',
    'Tablets'
  ];

  return (
    <div className="min-h-screen flex flex-col">


      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-600 to-purple-700 text-white pt-12 px-4  pb-[300px]">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Upgrade Your Tech Accessorize with<br />Gadget Heaven Accessories
          </h1>
          <p className="mb-6 max-w-2xl mx-auto">
            Explore the latest gadgets and accessories to enhance your digital lifestyle.
            Find premium quality tech products at competitive prices.
          </p>
          <button className="bg-white text-purple-700 px-6 py-2 rounded-full font-medium hover:bg-purple-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </section>

      {/* Banner Image */}
      <div className=" px-4 -mt-[250px] ">
        <div className="container mx-auto my-auto ">
          <div className=" bg-transparent rounded-lg overflow-hidden max-w-[1100px] h-[600px] flex mx-auto my-auto  border-solid border-white border-2">
            <img
              src={img}
              alt="VR Headset"
              className="w-[950px] h-[500px] rounded-lg object-cover mx-auto my-auto"
            />
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Explore Cutting-Edge Gadgets</h2>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full md:w-1/5 mb-6 md:mb-0 pr-0 md:pr-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`mb-2 py-2 px-4 rounded-md cursor-pointer transition-colors ${activeCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'hover:bg-purple-100'
                    }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span>{category}</span>
                </div>
              ))}
            </div>

            {/* Products Grid */}
            <div className="w-full md:w-4/5">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <div
                      key={product.id}
                      className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div
                        className="bg-gray-100 h-40 flex items-center justify-center cursor-pointer"
                        onClick={() => handleProductClick(product.id)}
                      >
                        <img
                          src={`https://via.placeholder.com/300x200?text=${encodeURIComponent(product.name)}`}
                          alt={product.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3
                              className="font-medium cursor-pointer hover:text-purple-600"
                              onClick={() => handleProductClick(product.id)}
                            >
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-500">{product.category}</p>
                            <p className="text-sm text-gray-600 mb-3">Price: ${product.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                            className="p-1"
                          >
                            {isInWishlist(product.id) ? (
                              <FaHeart className="text-red-500" />
                            ) : (
                              <FaRegHeart className="text-gray-400 hover:text-red-500" />
                            )}
                          </button>
                        </div>
                        <button
                          className="w-full text-purple-700 text-sm border border-purple-600 px-3 py-1 rounded hover:bg-purple-50 flex items-center justify-center"
                          onClick={() => handleProductClick(product.id)}
                        >
                          View Detail <FaChevronRight className="ml-1 text-xs" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;