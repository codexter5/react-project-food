export default function FoodCard({ item, addToCart, deleteItem, user }) {
  const isAdmin = user?.username === 'admin';

  return (
    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col overflow-hidden">
      
      {/* Delete Button for Admin */}
      {isAdmin && (
        <button
          onClick={() => deleteItem(item.id)}
          className="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-red-700 transition"
          title="Delete Item"
        >
          ✕
        </button>
      )}

      {/* Food Icon */}
      <div className="h-40 flex items-center justify-center text-6xl bg-yellow-100">
        {item.image}
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>

        {/* Category Badge */}
        <p className="inline-block w-fit bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {item.category}
        </p>

        {/* Card Footer: Price + Add Button */}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-extrabold text-green-600">${item.price}</span>
          <button
            onClick={() => addToCart(item)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 active:scale-95 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
