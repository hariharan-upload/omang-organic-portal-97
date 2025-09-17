
import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '../assets/logo.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2 group">
          {/* <Leaf className={cn(
            "transition-colors duration-300",
            isScrolled ? "text-omang-green" : "text-omang-green"
          )} />
          <span className={cn(
            "font-display text-xl font-medium tracking-tight transition-colors duration-300",
            isScrolled ? "text-foreground" : "text-foreground"
          )}>
            Omang Organics
          </span> */}
          <img src={Logo} alt="Omang Logo" className="h-16 w-auto" />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Services', 'Global Reach', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-omang-green link-underline",
                isScrolled ? "text-foreground" : "text-foreground"
              )}
            >
              {item}
            </a>
          ))}
        </nav>

        <button 
          className="md:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container p-4 flex justify-end">
          <button 
            onClick={toggleMobileMenu}
            className="text-foreground p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="container flex flex-col items-center justify-center h-[80vh] space-y-8">
          {['About', 'Services', 'Global Reach', 'Contact'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-xl font-medium text-foreground hover:text-omang-green transition-colors duration-300"
              onClick={toggleMobileMenu}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
