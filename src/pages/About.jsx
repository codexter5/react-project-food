export default function About() {
  return (
    <div className="min-h-screen bg-yellow-50 px-4 py-20 flex flex-col items-center">
      
      {/* Page Title */}
      <h2 className="text-4xl font-extrabold text-red-600 mb-6 text-center">
        About <span className="text-yellow-400">FoodieApp</span>
      </h2>

      {/* Description */}
      <p className="max-w-2xl text-center text-gray-700 text-lg mb-10">
        Welcome to <strong className="text-red-600">FoodieApp</strong>. 
        We have been serving delicious digital food since 2025. Enjoy fresh, tasty, and perfectly crafted meals at the click of a button!
      </p>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-2">📍 Visit Us</h3>
          <p className="text-gray-700">123 React Lane, Vite City</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-red-600 mb-2">⏰ Hours</h3>
          <p className="text-gray-700">Mon-Sun: 10am - 10pm</p>
        </div>

      </div>
    </div>
  );
}
