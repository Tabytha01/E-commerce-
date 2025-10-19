import ProductCard from '../components/ProductCard';

export default function Products() {
  const allProducts = [
    // Electronics
    { id: 1, name: "Laptop", price: 999, category: "Electronics", image: "/image/Laptop.jpg" },
    { id: 2, name: "Headphones", price: 199, category: "Electronics", image: "/image/Headphones.jpg" },
    { id: 7, name: "Phone", price: 799, category: "Electronics", image: "/image/Phone.jpg" },
    // Fashion
    { id: 3, name: "T-Shirt", price: 29, category: "Fashion", image: "/image/T-shirts.jpg" },
    { id: 4, name: "Shoes", price: 89, category: "Fashion", image: "/image/Shoes.jpg" },
    { id: 8, name: "Jeans", price: 59, category: "Fashion", image: "/image/Jeans.jpg" },
    // Accessories
    { id: 5, name: "Watch", price: 150, category: "Accessories", image: "/image/Watch.jpg" },
    { id: 6, name: "Backpack", price: 79, category: "Accessories", image: "/image/Backpacks.jpg" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allProducts.map(product => (
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
