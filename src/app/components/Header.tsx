import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { Button } from './ui/button';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Home className="w-6 h-6 text-blue-500" />
          <span className="text-xl font-bold text-white">HANI<span className="text-blue-500">Realtors</span></span>
        </Link>
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
        <div className="flex items-center gap-3">
          <button className="text-white hover:text-blue-400 transition-colors text-sm uppercase">Login</button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6">
            CREATE ACCOUNT
          </Button>
        </div>
      </div>
    </header>
  );
}
