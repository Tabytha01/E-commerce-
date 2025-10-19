import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", image: "/image/Laptop.jpg" },
    { id: 2, name: "Headphones", price: 199, category: "Electronics", image: "/image/Headphones.jpg" },
    { id: 3, name: "T-Shirt", price: 29, category: "Fashion", image: "/image/T-shirts.jpg" },
    { id: 4, name: "Shoes", price: 89, category: "Fashion", image: "/image/Shoes.jpg" },
    { id: 5, name: "Watch", price: 150, category: "Accessories", image: "/image/Watch.jpg" },
    { id: 6, name: "Backpack", price: 79, category: "Accessories", image: "/image/Backpack.jpg" },
    { id: 7, name: "Phone", price: 799, category: "Electronics", image: "/image/Phone.jpg" },
    { id: 8, name: "Jeans", price: 59, category: "Fashion", image: "/image/Jeans.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-12 rounded-lg mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Store!</h1>
        <p className="text-xl mb-6">Discover amazing products at great prices</p>
        <Link to="/products" className="bg-white text-blue-600 px-6 py-3 rounded font-bold hover:bg-gray-100">
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map(product => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}