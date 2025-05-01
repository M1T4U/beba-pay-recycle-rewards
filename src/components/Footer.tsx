
import React from 'react';
import { Link } from 'react-router-dom';
import { Recycle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Recycle className="w-6 h-6 text-beba-green" />
              <span className="text-xl font-bold gradient-text">BebaPay</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Incentivizing recycling through blockchain rewards.
              Making Nairobi cleaner, one plastic bottle at a time.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-beba-green transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/rewards" className="text-sm text-muted-foreground hover:text-beba-green transition-colors">
                  Rewards
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-beba-green transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                Email: info@bebapay.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +254 700 000000
              </li>
              <li className="text-sm text-muted-foreground">
                Address: Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} BebaPay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
