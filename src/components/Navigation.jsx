import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, BookOpen, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-challenge', label: 'About' },
    { path: '/competition-manual', label: 'Competition Manual' },
    { path: '/access-outreach', label: 'Community Pilots' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
            onClick={handleLinkClick}
          >
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block tracking-tight">
              National Economics Challenge
            </span>
            <span className="text-xl font-bold text-foreground sm:hidden tracking-tight">
              NEC
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={handleLinkClick}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'bg-secondary text-secondary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            {isAuthenticated ? (
              <>
                <Link to="/submit">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-6">
                    Dashboard
                  </Button>
                </Link>
                <Button variant="ghost" size="icon" onClick={logout} title="Log Out" className="rounded-full">
                  <LogOut className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-full px-6 font-semibold">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold shadow-sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full text-foreground hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border overflow-hidden bg-white"
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`block px-4 py-3 rounded-2xl text-base font-semibold ${
                    isActive(link.path)
                      ? 'bg-secondary text-secondary-foreground'
                      : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="pt-6 mt-4 border-t border-border flex flex-col space-y-3">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-3 px-4 py-2 text-muted-foreground">
                      <div className="bg-secondary p-2 rounded-full">
                        <User className="h-5 w-5 text-secondary-foreground" />
                      </div>
                      <span className="font-medium text-foreground">{user?.name || 'Student'}</span>
                    </div>
                    <Link to="/submit" onClick={handleLinkClick}>
                      <Button className="w-full justify-center border-primary text-primary rounded-2xl py-6" variant="outline">
                        My Dashboard
                      </Button>
                    </Link>
                    <Button onClick={() => { logout(); setIsOpen(false); }} variant="ghost" className="w-full justify-center text-destructive hover:text-destructive hover:bg-destructive/10 rounded-2xl py-6">
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={handleLinkClick}>
                      <Button variant="outline" className="w-full rounded-2xl py-6 border-primary text-primary font-semibold">
                        Log In
                      </Button>
                    </Link>
                    <Link to="/signup" onClick={handleLinkClick}>
                      <Button className="w-full rounded-2xl py-6 bg-primary text-primary-foreground font-semibold">
                        Sign Up
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
