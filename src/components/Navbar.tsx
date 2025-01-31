import { Link, useLocation } from 'react-router-dom';
import { Mail, ShoppingCart, FileText } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-white/10' : '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-white">
            Email Templates
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/login-template"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors ${isActive('/login-template')}`}
            >
              <Mail className="w-4 h-4 mr-2" />
              OTP Login
            </Link>
            <Link
              to="/cart-template"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors ${isActive('/cart-template')}`}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Cart
            </Link>
            <Link
              to="/invoice-template"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors ${isActive('/invoice-template')}`}
            >
              <FileText className="w-4 h-4 mr-2" />
              Invoice
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;