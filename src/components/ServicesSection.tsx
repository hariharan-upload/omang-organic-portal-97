
import { useRef, useEffect } from 'react';
import { Tag, Search, PackageCheck } from 'lucide-react';
import FeatureCard from './ui/FeatureCard';
import { cn } from '@/lib/utils';

const ServicesSection = () => {
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
    <section id="services" ref={sectionRef} className="section-padding bg-omang-cream">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 mb-4 bg-omang-lightGreen text-omang-green rounded-full text-sm font-medium tracking-wide opacity-0"
            data-animate="fade-in"
          >
            Our Services
          </span>
          
          <h2 
            className="mb-6 opacity-0" 
            data-animate="fade-in"
            style={{ animationDelay: '200ms' }}
          >
            Comprehensive Organic Solutions
          </h2>
          
          <p 
            className="text-balance opacity-0" 
            data-animate="fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Omang Organics offers end-to-end solutions for bringing organic products to market, 
            from global sourcing to custom branding and efficient distribution throughout the Middle East.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Tag size={24} />}
            title="Private Labeling"
            description="Transform premium organic products into your branded offerings with our comprehensive private labeling services. We handle everything from custom packaging design to regulatory compliance."
            delay={600}
          />
          
          <FeatureCard 
            icon={<Search size={24} />}
            title="Global Sourcing"
            description="Access our extensive network of certified organic producers worldwide. We identify and secure the highest quality ingredients and products that meet your specific requirements."
            delay={800}
          />
          
          <FeatureCard 
            icon={<PackageCheck size={24} />}
            title="Brand Distribution"
            description="Leverage our established distribution channels across the Middle East region to bring your organic brands to new markets with strategic placement and marketing support."
            delay={1000}
          />
        </div>
        
        <div 
          className="mt-16 p-8 bg-white border border-omang-cream rounded-lg shadow-sm text-center opacity-0"
          data-animate="fade-in"
          style={{ animationDelay: '1200ms' }}
        >
          <h3 className="text-xl mb-3">Ready to elevate your organic product offerings?</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you navigate the organic market landscape and develop 
            tailored solutions for your business needs.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-omang-green text-white rounded-md hover:bg-omang-green/90 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
