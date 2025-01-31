import { Link } from 'react-router-dom';
import { Mail, ShoppingCart, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <h1 className="text-4xl font-bold text-center mb-12">Email Template Gallery</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <Link to="/login-template" className="glass-card p-6 rounded-lg hover:bg-white/10 transition-colors">
            <Mail className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">OTP Login Template</h2>
            <p className="text-gray-400">Secure email verification template with OTP code.</p>
          </Link>
          <Link to="/cart-template" className="glass-card p-6 rounded-lg hover:bg-white/10 transition-colors">
            <ShoppingCart className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Cart Reminder Template</h2>
            <p className="text-gray-400">Abandoned cart recovery email template.</p>
          </Link>
          <Link to="/invoice-template" className="glass-card p-6 rounded-lg hover:bg-white/10 transition-colors">
            <FileText className="w-12 h-12 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Invoice Template</h2>
            <p className="text-gray-400">Professional invoice email template.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;