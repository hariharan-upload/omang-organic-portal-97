
import { useRef, useEffect } from 'react';
import { Globe, TrendingUp, Users, Building } from 'lucide-react';
import AnimatedImage from './ui/AnimatedImage';
import { cn } from '@/lib/utils';

const StatItem = ({ value, label, delay }: { value: string; label: string; delay: number }) => {
  return (
    <div 
      className="text-center opacity-0" 
      data-animate="scale-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-display font-medium text-omang-green mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const GlobalReachSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animateElements = entry.target.querySelectorAll('[data-animate]');
            animateElements.forEach(el => {
              const animation = el.getAttribute('data-animate');
              el.classList.add(`animate-${animation}`);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="global-reach" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span 
              className="inline-block px-4 py-1.5 mb-4 bg-omang-lightGreen text-omang-green rounded-full text-sm font-medium tracking-wide opacity-0"
              data-animate="fade-in"
            >
              Global Reach
            </span>
            
            <h2 
              className="mb-6 opacity-0" 
              data-animate="fade-in"
              style={{ animationDelay: '200ms' }}
            >
              Connecting Global Suppliers with Middle Eastern Markets
            </h2>
            
            <p 
              className="mb-8 opacity-0" 
              data-animate="fade-in"
              style={{ animationDelay: '400ms' }}
            >
              With our headquarters in Dubai and an extensive network spanning across continents, 
              Omang Organics serves as the vital bridge between premium global organic producers 
              and the growing Middle Eastern market.
            </p>
            
            <div 
              className="flex items-center mb-8 opacity-0" 
              data-animate="slide-in-right"
              style={{ animationDelay: '600ms' }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-omang-lightGreen text-omang-green mr-4">
                <Globe size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Worldwide Sourcing</h3>
                <p className="text-sm text-muted-foreground">
                  We source premium organic products from certified producers across Europe, Americas, Asia, and Africa.
                </p>
              </div>
            </div>
            
            <div 
              className="flex items-center mb-8 opacity-0" 
              data-animate="slide-in-right"
              style={{ animationDelay: '800ms' }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-omang-lightGreen text-omang-green mr-4">
                <Building size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Strategic Dubai Hub</h3>
                <p className="text-sm text-muted-foreground">
                  Our Dubai headquarters serves as the perfect distribution hub for the entire Middle East region.
                </p>
              </div>
            </div>
            
            <div 
              className="flex items-center opacity-0" 
              data-animate="slide-in-right"
              style={{ animationDelay: '1000ms' }}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-omang-lightGreen text-omang-green mr-4">
                <TrendingUp size={20} />
              </div>
              <div>
                <h3 className="font-medium mb-1">Market Penetration</h3>
                <p className="text-sm text-muted-foreground">
                  We've established distribution channels in UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="absolute w-full h-full rounded-2xl rotate-3 border-2 border-omang-lightGreen opacity-0"
              data-animate="fade-in"
              style={{ animationDelay: '400ms' }}
            />
            
            <div 
              className="relative rounded-2xl overflow-hidden shadow-lg opacity-0"
              data-animate="fade-in"
              style={{ animationDelay: '600ms' }}
            >
              <AnimatedImage 
                src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Global Organic Distribution" 
                className="aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-20 py-12 border-t border-b border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value="25+" label="Countries Sourced From" delay={400} />
            <StatItem value="12" label="Middle East Markets" delay={600} />
            <StatItem value="500+" label="Product Varieties" delay={800} />
            <StatItem value="98%" label="Client Satisfaction" delay={1000} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReachSection;
