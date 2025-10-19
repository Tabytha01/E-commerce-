export default function ProductCard({ image, name, price, category }) {
  const handleAddToCart = () => {
    alert(`Added ${name} to cart!`);
    console.log(`Added ${name} ($${price}) to cart`);
  };

  return (
    <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-4" />
      <p className="text-sm text-gray-500">{category}</p>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-blue-600 font-bold text-xl mb-4">${price}</p>
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
}