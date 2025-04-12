
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield, Github, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-muted">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold gradient-text">Evasion Techniques</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/techniques" className="text-foreground/80 hover:text-primary transition-colors">
              Techniques
            </Link>
            <Link to="/resources" className="text-foreground/80 hover:text-primary transition-colors">
              Resources
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <Link to="/login">
              <Button variant="outline" className="flex items-center gap-1">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Button>
            </Link>
            <Button variant="outline" className="neon-border">
              Join Community
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground/80 hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/techniques" 
              className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Techniques
            </Link>
            <Link 
              to="/resources" 
              className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </a>
            <Link
              to="/login"
              className="block px-3 py-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded-md transition-colors flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
            <div className="px-3 pt-2">
              <Button variant="outline" className="w-full neon-border">
                Join Community
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
