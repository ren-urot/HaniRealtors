import { Home, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 relative z-50">
          <Home className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-bold text-white">HANI<span className="text-blue-500">Realtors</span></span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`transition-colors text-sm uppercase ${
              isActive('/') && location.pathname === '/' 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/properties" 
            className={`transition-colors text-sm uppercase ${
              isActive('/properties') 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Properties
          </Link>
          <Link 
            to="/about" 
            className={`transition-colors text-sm uppercase ${
              isActive('/about') 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`transition-colors text-sm uppercase ${
              isActive('/contact') 
                ? 'text-blue-400' 
                : 'text-white hover:text-blue-400'
            }`}
          >
            Contact
          </Link>
        </nav>
        
        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-white hover:text-blue-400 transition-colors text-sm uppercase">Login</button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6">
            CREATE ACCOUNT
          </Button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          className="md:hidden text-white relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-900/95 md:hidden z-40">
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`transition-colors text-2xl uppercase ${
                  isActive('/') && location.pathname === '/' 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/properties" 
                onClick={closeMobileMenu}
                className={`transition-colors text-2xl uppercase ${
                  isActive('/properties') 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Properties
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`transition-colors text-2xl uppercase ${
                  isActive('/about') 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMobileMenu}
                className={`transition-colors text-2xl uppercase ${
                  isActive('/contact') 
                    ? 'text-blue-400' 
                    : 'text-white hover:text-blue-400'
                }`}
              >
                Contact
              </Link>
              
              <div className="flex flex-col items-center gap-4 mt-8">
                <button 
                  className="text-white hover:text-blue-400 transition-colors text-lg uppercase"
                  onClick={closeMobileMenu}
                >
                  Login
                </button>
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
                  onClick={closeMobileMenu}
                >
                  CREATE ACCOUNT
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}