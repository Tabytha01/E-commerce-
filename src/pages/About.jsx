export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      <div className="bg-gray-50 p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to My Store! We started with a simple mission: to provide high-quality products at affordable prices. 
          Founded in 2025, we've grown to serve thousands of happy customers worldwide. We believe in excellence, 
          integrity, and customer satisfaction in everything we do.
        </p>
      </div>

      <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">✓ Quality Products</h3>
          <p className="text-gray-700">We source only the best products from trusted suppliers.</p>
        </div>
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">✓ Great Prices</h3>
          <p className="text-gray-700">Competitive pricing without compromising on quality.</p>
        </div>
        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">✓ Fast Shipping</h3>
          <p className="text-gray-700">Quick and reliable delivery to your doorstep.</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">✓ Customer Support</h3>
          <p className="text-gray-700">24/7 support to help with any questions.</p>
        </div>
      </div>
    </div>
  );
}