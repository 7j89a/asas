import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glass-card-light dark:glass-card-dark shadow-2xl shadow-blue-900/10 dark:shadow-none' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-serif font-bold tracking-widest border-2 border-brand-blue-600 dark:border-gold-500 px-4 py-1 rounded-full text-brand-blue-900 dark:text-white transition-colors duration-300">
          ELIXIR <span className="text-brand-blue-600 dark:text-gold-500 transition-colors duration-300">SKIN</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 space-x-reverse">
          <a href="#benefits" className="text-slate-700 dark:text-gray-100 hover:text-brand-blue-600 dark:hover:text-gold-400 font-medium transition-colors text-base tracking-wide shadow-black drop-shadow-sm dark:drop-shadow-md">الفوائد</a>
          <a href="#ingredients" className="text-slate-700 dark:text-gray-100 hover:text-brand-blue-600 dark:hover:text-gold-400 font-medium transition-colors text-base tracking-wide shadow-black drop-shadow-sm dark:drop-shadow-md">المكونات</a>
          <a href="#reviews" className="text-slate-700 dark:text-gray-100 hover:text-brand-blue-600 dark:hover:text-gold-400 font-medium transition-colors text-base tracking-wide shadow-black drop-shadow-sm dark:drop-shadow-md">تجارب العملاء</a>
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-brand-blue-200 dark:border-gold-500/30 text-brand-blue-600 dark:text-gold-400 hover:bg-brand-blue-50 dark:hover:bg-gold-500/10 transition-all"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="bg-gradient-to-r from-brand-blue-500 to-brand-blue-700 dark:from-gold-500 dark:to-gold-700 text-white dark:text-black px-8 py-3 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 font-bold tracking-wide hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.4)] dark:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <span>اطلب الآن</span>
            <ShoppingBag size={18} />
          </button>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="md:hidden flex items-center gap-4">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full border border-brand-blue-200 dark:border-gold-500/30 text-brand-blue-600 dark:text-gold-400"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button 
            className="text-brand-blue-600 dark:text-gold-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-brand-blue-100 dark:border-gold-900 p-6 flex flex-col space-y-4 shadow-2xl transition-colors duration-300">
          <a href="#benefits" className="text-lg text-slate-800 dark:text-white font-medium" onClick={() => setIsOpen(false)}>الفوائد</a>
          <a href="#ingredients" className="text-lg text-slate-800 dark:text-white font-medium" onClick={() => setIsOpen(false)}>المكونات</a>
          <button className="bg-brand-blue-600 dark:bg-gold-500 text-white dark:text-brand-black w-full py-3 font-bold mt-4 rounded-full">
            اطلب المنتج
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;