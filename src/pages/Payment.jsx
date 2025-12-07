import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment({ total, clearCart }) {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ name: '', card: '', address: '' });

  const handlePayment = (e) => {
    e.preventDefault();
    alert(`Payment of $${total} successful! Order is on the way.`);
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
        
        <h2 className="text-3xl font-extrabold text-red-600 text-center">Checkout</h2>
        <p className="text-center text-gray-700 text-lg">Total Amount: <strong className="text-green-600">${total}</strong></p>

        <form onSubmit={handlePayment} className="flex flex-col space-y-4">

          <input
            type="text"
            placeholder="Full Name"
            required
            onChange={e => setDetails({ ...details, name: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <input
            type="text"
            placeholder="0000 0000 0000 0000"
            required
            onChange={e => setDetails({ ...details, card: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />

          <textarea
            placeholder="Delivery Address"
            required
            onChange={e => setDetails({ ...details, address: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition resize-none"
          />

          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-red-700 active:scale-95 transition"
          >
            Pay Now
          </button>

        </form>
      </div>
    </div>
  );
}
