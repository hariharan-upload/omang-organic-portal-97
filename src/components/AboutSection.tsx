
import { useRef, useEffect } from 'react';
import { Leaf, Globe, Shield, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const FeatureItem = ({ icon, title, description, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => {
  return (
    <div 
      className="flex flex-col items-center text-center p-6 opacity-0"
      style={{ animationDelay: `${delay}ms` }}
      data-animate="fade-in"
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-omang-lightGreen text-omang-green mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span 
            className="inline-block px-4 py-1.5 mb-4 bg-omang-lightGreen text-omang-green rounded-full text-sm font-medium tracking-wide opacity-0"
            data-animate="fade-in"
          >
            About Omang Organics
          </span>
          
          <h2 
            className="mb-6 opacity-0" 
            data-animate="fade-in"
            style={{ animationDelay: '200ms' }}
          >
            Bringing Nature's Finest to You
          </h2>
          
          <p 
            className="text-balance opacity-0" 
            data-animate="fade-in"
            style={{ animationDelay: '400ms' }}
          >
            <strong>Omang Organic Foods</strong> is part of the larger <strong>Omang Group</strong>, established in 2009 with a footprint across the UAE, Canada, Italy, KSA, and Kenya. The group operates across multiple sectors, including large-format printing, IT products, and global trading. Built on the values of transparency, agility, and purposeful innovation, Omang Group is now focused on creating impact in the organic and millet food sector—driven by a commitment to enhance societal well-being through healthy, sustainable food choices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={<Leaf size={24} />}
            title="Distribution for Brands"
            description="We help organic brands expand across key markets through a well-structured distribution network."
            delay={600}
          />
          
          <FeatureItem 
            icon={<Shield size={24} />}
            title="Brand-Building Support for Retailers"
            description="We enable retailers to build compelling private-label organic brands—backed by regional consumer insights."
            delay={800}
          />
          
          <FeatureItem 
            icon={<Globe size={24} />}
            title="Global Sourcing"
            description="We source premium-quality organic ingredients from trusted global suppliers."
            delay={1000}
          />
          
          <FeatureItem 
            icon={<Award size={24} />}
            title="Facilitation of Private Label Manufacturing"
            description="From product development and packaging to regulatory compliance, we provide a one-stop solution."
            delay={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
