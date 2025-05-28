export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-16 sm:mt-24 md:mt-32">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Shop FreshMart</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <a href="/shop" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Fresh Produce</h2>
          <p className="text-sm sm:text-base text-gray-600">Browse our selection of fresh fruits and vegetables</p>
        </a>
        <a href="/shop" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Bakery</h2>
          <p className="text-sm sm:text-base text-gray-600">Freshly baked bread, pastries, and desserts</p>
        </a>
        <a href="/shop" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Dairy & Eggs</h2>
          <p className="text-sm sm:text-base text-gray-600">Quality dairy products and farm-fresh eggs</p>
        </a>
        <a href="/shop" className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Meat & Seafood</h2>
          <p className="text-sm sm:text-base text-gray-600">Premium meats and fresh seafood</p>
        </a>
      </div>
    </div>
  );
} 