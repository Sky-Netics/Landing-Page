export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-32">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Home Delivery</h2>
          <p className="text-gray-600 mb-4">Get your groceries delivered right to your doorstep. Available for orders over $50.</p>
          <a href="/services" className="text-green-600 hover:text-green-700">Learn More →</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Catering Services</h2>
          <p className="text-gray-600 mb-4">Professional catering for events, parties, and corporate functions.</p>
          <a href="/services" className="text-green-600 hover:text-green-700">Learn More →</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Loyalty Program</h2>
          <p className="text-gray-600 mb-4">Join our rewards program and earn points on every purchase.</p>
          <a href="/services" className="text-green-600 hover:text-green-700">Learn More →</a>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Gift Cards</h2>
          <p className="text-gray-600 mb-4">Give the gift of quality groceries with our gift cards.</p>
          <a href="/services" className="text-green-600 hover:text-green-700">Learn More →</a>
        </div>
      </div>
    </div>
  );
} 