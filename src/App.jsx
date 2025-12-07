import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initialMenu } from './data';
import Navbar from './components/NavBar';
import Menu from './pages/Menu';
import About from './pages/About';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import AddFood from './pages/AddFood';

function App() {
  const [menu, setMenu] = useState(initialMenu);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  
  // Mock Database (Start with Admin)
  const [users, setUsers] = useState([{ username: 'admin', password: '123' }]);

  // --- Auth Logic ---
  const handleLogin = ({ username, password }) => {
    const foundUser = users.find(u => u.username === username && u.password === password);
    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    alert("Invalid Credentials (Try: admin / 123)");
    return false;
  };

  const handleRegister = ({ username, password }) => {
    if (users.find(u => u.username === username)) {
      alert("User exists");
      return false;
    }
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setUser(newUser);
    return true;
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
  };

  // --- Menu Logic ---
  const addFoodItem = (item) => setMenu([...menu, item]);
  const deleteItem = (id) => {
    if(window.confirm("Delete this item?")) {
      setMenu(menu.filter(i => i.id !== id));
      setCart(cart.filter(i => i.id !== id));
    }
  };

  // --- Cart Logic ---
  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      return exists 
        ? prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
        : [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQty = (id, amount) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + amount) } : item
    ).filter(i => i.quantity > 0));
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-yellow-50">
        {/* Navbar */}
        <Navbar user={user} cartCount={cart.length} logout={handleLogout} />

        {/* Page Container */}
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Routes>
            <Route path="/" element={<Menu menu={menu} addToCart={addToCart} deleteItem={deleteItem} user={user} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login handleLogin={handleLogin} handleRegister={handleRegister} />} />
            <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} removeFromCart={(id) => updateQty(id, -100)} total={total} />} />
            <Route path="/payment" element={<Payment total={total} clearCart={() => setCart([])} />} />
            <Route path="/add" element={<AddFood addFoodItem={addFoodItem} />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-red-600 text-white text-center py-4 mt-auto">
          <p className="text-sm">&copy; {new Date().getFullYear()} FoodieApp. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
