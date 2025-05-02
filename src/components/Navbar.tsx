
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Recycle, Wallet, MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/90 border-b">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto">
        <Link to="/" className="flex items-center gap-2">
          <Recycle className="w-6 h-6 text-beba-green" />
          <span className="text-xl font-bold gradient-text">BebaPay</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/how-it-works" className="hidden md:block text-foreground hover:text-beba-green transition-colors">
            How It Works
          </Link>
          <Link to="/rewards" className="hidden md:block text-foreground hover:text-beba-green transition-colors">
            Rewards
          </Link>
          <Link to="/dashboard" className="hidden md:block text-foreground hover:text-beba-green transition-colors">
            Dashboard
          </Link>
          <Link to="/chatbot" className="hidden md:block text-foreground hover:text-beba-green transition-colors">
            <div className="flex items-center gap-1">
              <MessageSquare size={16} />
              <span>zvcBebaPay AI</span>
            </div>
          </Link>
          <Button className="flex items-center gap-2 bg-beba-green hover:bg-beba-dark-green text-white">
            <Wallet size={18} />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
