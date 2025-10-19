import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const featuredProducts = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", image: "/image/Laptop.jpg" },
    { id: 2, name: "Headphones", price: 199, category: "Electronics", image: "/image/Headphones.jpg" },
    { id: 3, name: "T-Shirt", price: 29, category: "Fashion", image: "/image/T-shirts.jpg" },
    { id: 4, name: "Shoes", price: 89, category: "Fashion", image: "/image/Shoes.jpg" },
    { id: 5, name: "Watch", price: 150, category: "Accessories", image: "/image/Watch.jpg" },
    { id: 6, name: "Backpack", price: 79, category: "Accessories", image: "/image/Backpacks.jpg" },
    { id: 7, name: "Phone", price: 799, category: "Electronics", image: "/image/Phone.jpg" },
    { id: 8, name: "Jeans", price: 59, category: "Fashion", image: "/image/Jeans.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
     {/* Hero Section */}
<div 
  className="relative text-white mb-8 h-96 flex items-center -mx-2 px-2 overflow-hidden"
  style={{
    backgroundImage: `url('/image/Heroimg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-800 to-transparent"></div>
  <div className="max-w-7xl mx-auto w-full flex items-center justify-between relative z-10">
    {/* Left Side - Text */}
    <div className="flex-1 pr-8">
      <p className="text-sm font-semibold text-blue-200 mb-2">WELCOME TO OUR STORE</p>
      <h1 className="text-5xl font-bold mb-4">Supercharge your shopping</h1>
      <p className="text-lg text-blue-100 mb-8">Discover amazing products at great prices with total control over your purchases.</p>
      <Link to="/products" className="bg-yellow-300 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 text-lg inline-block">
        Shop Now
      </Link>
    </div>
  </div>
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