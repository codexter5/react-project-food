import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddFood({ addFoodItem }) {
  const navigate = useNavigate();
  const [food, setFood] = useState({ name: '', price: '', category: 'General', image: '🍽️' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFoodItem({ ...food, id: Date.now(), price: Number(food.price) });
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-extrabold text-red-600 text-center mb-4">
          Add New Food Item
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

          <input
            type="text"
            placeholder="Food Name"
            required
            onChange={e => setFood({ ...food, name: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <input
            type="number"
            placeholder="Price ($)"
            required
            onChange={e => setFood({ ...food, price: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <select
            onChange={e => setFood({ ...food, category: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition bg-white"
          >
            <option>Pizza</option>
            <option>Burger</option>
            <option>Sushi</option>
            <option>Drinks</option>
          </select>

          <div className="flex justify-center space-x-2">
            {['🍕','🍔','🍣','🥤','🍩'].map(emoji => (
              <span
                key={emoji}
                onClick={() => setFood({ ...food, image: emoji })}
                className={`text-3xl cursor-pointer transition p-2 rounded-full ${
                  food.image === emoji ? 'ring-2 ring-red-500' : ''
                }`}
              >
                {emoji}
              </span>
            ))}
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-red-700 active:scale-95 transition"
          >
            Add to Menu
          </button>

        </form>
      </div>
    </div>
  );
}
