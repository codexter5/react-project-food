import { Link } from 'react-router-dom';

export default function Cart({ cart, updateQty, removeFromCart, total }) {
  if (cart.length === 0) 
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-20">
        <h2 className="text-2xl font-bold text-red-600 text-center">
          Cart is Empty 🛒
        </h2>
      </div>
    );

  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-20 flex flex-col items-center">
      <h2 className="text-3xl font-extrabold text-red-600 mb-8">Your Order</h2>

      <div className="w-full max-w-3xl flex flex-col space-y-4">
        {cart.map(item => (
          <div key={item.id} className="bg-white rounded-2xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Item Name */}
            <span className="text-lg font-semibold flex-1 flex items-center gap-2">
              <span className="text-3xl">{item.image}</span> {item.name}
            </span>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQty(item.id, -1)}
                className="px-3 py-1 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
              >
                -
              </button>
              <span className="px-3 py-1">{item.quantity}</span>
              <button
                onClick={() => updateQty(item.id, 1)}
                className="px-3 py-1 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition"
              >
                +
              </button>
            </div>

            {/* Item Price */}
            <span className="text-green-600 font-bold">${item.price * item.quantity}</span>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 bg-gray-300 text-red-600 rounded-lg font-semibold hover:bg-gray-200 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Checkout Section */}
      <div className="mt-8 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md">
        <h3 className="text-2xl font-bold text-red-600">Total: ${total}</h3>
        <Link to="/payment" className="mt-4 md:mt-0">
          <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 active:scale-95 transition">
            Proceed to Pay
          </button>
        </Link>
      </div>
    </div>
  );
}
