import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: {
    scrollToCourses: () => void;
    scrollToContact: () => void;
  };
}

function Header({ onNavigate }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            <span className="font-bold text-xl">Future Point</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => window.scrollTo(0, 0)} className="text-gray-600 hover:text-blue-600">Home</button>
            <button onClick={onNavigate.scrollToCourses} className="text-gray-600 hover:text-blue-600">Courses</button>
            <button onClick={onNavigate.scrollToContact} className="text-gray-600 hover:text-blue-600">Contact</button>
          </nav>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={onNavigate.scrollToContact}
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Get Started
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => {
                  window.scrollTo(0, 0);
                  closeMenu();
                }} 
                className="text-gray-600 hover:text-blue-600 py-2"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  onNavigate.scrollToCourses();
                  closeMenu();
                }} 
                className="text-gray-600 hover:text-blue-600 py-2"
              >
                Courses
              </button>
              <button 
                onClick={() => {
                  onNavigate.scrollToContact();
                  closeMenu();
                }} 
                className="text-gray-600 hover:text-blue-600 py-2"
              >
                Contact
              </button>
              <button 
                onClick={() => {
                  onNavigate.scrollToContact();
                  closeMenu();
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header