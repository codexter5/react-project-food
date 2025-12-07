import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ handleLogin, handleRegister }) {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      if (handleRegister(formData)) navigate('/');
    } else {
      if (handleLogin(formData)) navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-yellow-50 flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
        
        {/* Form Title */}
        <h2 className="text-3xl font-extrabold text-red-600 text-center">
          {isRegistering ? "Create Account" : "Welcome Back"}
        </h2>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-red-700 active:scale-95 transition"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        {/* Toggle Link */}
        <p
          onClick={() => setIsRegistering(!isRegistering)}
          className="text-center text-gray-600 cursor-pointer hover:text-red-600 transition"
        >
          {isRegistering ? "Already have an account? Login" : "New here? Register"}
        </p>
      </div>
    </div>
  );
}
