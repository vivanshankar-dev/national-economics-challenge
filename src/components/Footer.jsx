
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="col-span-1 md:col-span-12 lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary/20 p-2 rounded-xl">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">National Economics Challenge</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-slate-400 mb-8">
              Fostering clarity of economic thinking through competitive writing. We provide a platform for students to engage with complex concepts and contribute to economic discourse.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3 lg:col-start-6">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/about-challenge" onClick={handleLinkClick} className="text-slate-400 hover:text-primary transition-colors flex items-center"><span className="w-2 h-2 rounded-full bg-primary/50 mr-2"></span> About Challenge</Link></li>
              <li><Link to="/prompts" onClick={handleLinkClick} className="text-slate-400 hover:text-primary transition-colors flex items-center"><span className="w-2 h-2 rounded-full bg-primary/50 mr-2"></span> Prompt Bank</Link></li>
              <li><Link to="/signup" onClick={handleLinkClick} className="text-slate-400 hover:text-primary transition-colors flex items-center"><span className="w-2 h-2 rounded-full bg-primary/50 mr-2"></span> Sign Up</Link></li>
              <li><Link to="/login" onClick={handleLinkClick} className="text-slate-400 hover:text-primary transition-colors flex items-center"><span className="w-2 h-2 rounded-full bg-primary/50 mr-2"></span> Log In</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 md:col-span-8 lg:col-span-4">
            <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <div className="flex flex-col space-y-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Reach out to our team with any questions about the competition, your submission, or partnership opportunities.
              </p>
              <a href="mailto:team@nationaleconomicschallenge.dedyn.io" className="inline-flex items-center space-x-3 text-sm text-primary hover:text-primary-foreground hover:bg-primary transition-all p-3 rounded-xl border border-primary/20 w-fit">
                <Mail className="h-5 w-5" />
                <span className="font-semibold tracking-wide">team@nationaleconomicschallenge.dedyn.io</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} National Economics Challenge. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
