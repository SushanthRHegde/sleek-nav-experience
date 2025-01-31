import { Link, Route, Routes } from 'react-router-dom';
import { Mail, ShoppingCart, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import LoginTemplate from '../components/LoginTemplate';
import CartTemplate from '../components/CartTemplate';
import InvoiceTemplate from '../components/InvoiceTemplate';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Permanent Welcome Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="glass-card p-8 rounded-lg text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Welcome to Email Template Gallery
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our collection of professionally designed email templates. 
            Choose from OTP verification, cart reminders, and invoice templates.
          </p>
        </div>
      </div>

      {/* Template Preview Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
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

        {/* Dynamic Template Content */}
        <div className="mb-12">
          <Routes>
            <Route path="/login-template" element={<LoginTemplate />} />
            <Route path="/cart-template" element={<CartTemplate />} />
            <Route path="/invoice-template" element={<InvoiceTemplate />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Index;