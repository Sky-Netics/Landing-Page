export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 mt-16 sm:mt-24 md:mt-32">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Home Delivery</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">Get your groceries delivered right to your doorstep. Available for orders over $50.</p>
          <a href="/services" className="text-green-600 hover:text-green-700 text-sm sm:text-base">Learn More →</a>
        </div>
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Catering Services</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">Professional catering for events, parties, and corporate functions.</p>
          <a href="/services" className="text-green-600 hover:text-green-700 text-sm sm:text-base">Learn More →</a>
        </div>
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Loyalty Program</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">Join our rewards program and earn points on every purchase.</p>
          <a href="/services" className="text-green-600 hover:text-green-700 text-sm sm:text-base">Learn More →</a>
        </div>
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Gift Cards</h2>
          <p className="text-sm sm:text-base text-gray-600 mb-4">Give the gift of quality groceries with our gift cards.</p>
          <a href="/services" className="text-green-600 hover:text-green-700 text-sm sm:text-base">Learn More →</a>
        </div>
      </div>
    </div>
  );
} 