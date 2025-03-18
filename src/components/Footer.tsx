
import { Leaf, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-border pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-5">
              <Leaf className="text-omang-green" />
              <span className="font-display text-xl font-medium tracking-tight">
                Omang Organics
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-md">
              Connecting global organic excellence with Middle Eastern markets through sustainable distribution, private labeling, and strategic sourcing.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-omang-lightGreen hover:border-omang-green text-muted-foreground hover:text-omang-green transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-omang-lightGreen hover:border-omang-green text-muted-foreground hover:text-omang-green transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:bg-omang-lightGreen hover:border-omang-green text-muted-foreground hover:text-omang-green transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Services', 'Global Reach', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-omang-green transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-5">Services</h3>
            <ul className="space-y-3">
              {['Private Labeling', 'Global Sourcing', 'Brand Distribution', 'Quality Assurance'].map((item) => (
                <li key={item}>
                  <a 
                    href="#services"
                    className="text-muted-foreground hover:text-omang-green transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Omang Organics. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-omang-green group transition-colors duration-300"
          >
            <span>Back to top</span>
            <span className="inline-block group-hover:-translate-y-1 transition-transform duration-300">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
