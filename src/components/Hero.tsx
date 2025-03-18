
import { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          if (sectionRef.current) {
            const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, i * 200);
            });
          }
        }
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
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center relative overflow-hidden opacity-0 transition-opacity duration-1000"
      style={{
        background: "linear-gradient(to bottom, rgba(249, 247, 242, 0.9), rgba(249, 247, 242, 0.85)), url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-omang-beige/40 backdrop-blur-sm" />
      
      <div className="container-custom relative z-10 text-center pt-20 pb-16 px-4 reveal-animation">
        <span className="animate-on-scroll inline-block px-4 py-1.5 mb-5 bg-omang-lightGreen text-omang-green rounded-full text-sm font-medium tracking-wide opacity-0">
          Premium Organic Food Distribution
        </span>
        
        <h1 className="animate-on-scroll text-balance mb-6 text-foreground max-w-4xl mx-auto opacity-0">
          Connecting Global Organic Produce with the Middle East
        </h1>
        
        <p className="animate-on-scroll text-balance mb-10 max-w-2xl mx-auto opacity-0">
          Omang Organics bridges exceptional organic food from around the world to the Middle East through sustainable distribution, private labeling, and strategic sourcing.
        </p>
        
        <div className="animate-on-scroll flex justify-center space-x-4 opacity-0">
          <a 
            href="#services" 
            className="px-8 py-3 bg-omang-green text-white rounded-md hover:bg-omang-green/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Our Services
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 bg-white border border-omang-green text-omang-green rounded-md hover:bg-omang-lightGreen transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-float">
        <a 
          href="#about" 
          className="flex flex-col items-center text-omang-brown/70 hover:text-omang-brown transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2">Discover More</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
