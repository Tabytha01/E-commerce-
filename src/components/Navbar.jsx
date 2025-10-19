import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">🛒 My Store</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
          <li><Link to="/products" className="hover:text-gray-200">Products</Link></li>
          <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}