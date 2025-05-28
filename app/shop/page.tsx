export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <h1 className="text-4xl font-bold mb-8">Shop FreshMart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href="/shop" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Fresh Produce</h2>
          <p className="text-gray-600">Browse our selection of fresh fruits and vegetables</p>
        </a>
        <a href="/shop" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Bakery</h2>
          <p className="text-gray-600">Freshly baked bread, pastries, and desserts</p>
        </a>
        <a href="/shop" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Dairy & Eggs</h2>
          <p className="text-gray-600">Quality dairy products and farm-fresh eggs</p>
        </a>
        <a href="/shop" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2">Meat & Seafood</h2>
          <p className="text-gray-600">Premium meats and fresh seafood</p>
        </a>
      </div>
    </div>
  );
} 