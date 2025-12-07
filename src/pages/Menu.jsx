import { useState } from 'react';
import FoodCard from '../components/FoodCard';

export default function Menu({ menu, addToCart, deleteItem, user }) {
  const [search, setSearch] = useState("");

  const filteredMenu = menu.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-24 flex flex-col items-center">
      
      {/* Header + Search */}
      <div className="w-full max-w-5xl mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-3xl font-extrabold text-red-600">Our Menu</h2>
        <input 
          type="text" 
          placeholder="Search food or category..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-64 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
        />
      </div>

      {/* Menu Grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMenu.map(item => (
          <FoodCard 
            key={item.id} 
            item={item} 
            addToCart={addToCart} 
            deleteItem={deleteItem}
            user={user}
          />
        ))}
        {filteredMenu.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">No items found.</p>
        )}
      </div>
    </div>
  );
}
