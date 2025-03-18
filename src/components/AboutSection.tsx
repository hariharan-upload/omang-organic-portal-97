
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
        <div className="max-w-3xl mx-auto text-center mb-16">
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
            Bringing Nature's Finest to Your Table
          </h2>
          
          <p 
            className="text-balance opacity-0" 
            data-animate="fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Founded with a vision to make premium organic products accessible across the Middle East, 
            Omang Organics has established itself as a leading distributor connecting sustainable 
            farmers and producers worldwide with regional markets.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={<Leaf size={24} />}
            title="Organic Excellence"
            description="We rigorously select only the highest quality organic products that meet strict international standards."
            delay={600}
          />
          
          <FeatureItem 
            icon={<Globe size={24} />}
            title="Global Sourcing"
            description="Our worldwide network allows us to source unique and exceptional products from every corner of the globe."
            delay={800}
          />
          
          <FeatureItem 
            icon={<Shield size={24} />}
            title="Quality Assurance"
            description="Every product undergoes thorough quality checks to ensure it meets our premium standards."
            delay={1000}
          />
          
          <FeatureItem 
            icon={<Award size={24} />}
            title="Sustainability"
            description="We prioritize environmentally conscious practices throughout our entire supply chain."
            delay={1200}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
