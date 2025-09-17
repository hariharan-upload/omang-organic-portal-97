import { useRef, useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import emailjs from '@emailjs/browser';

const ContactItem = ({ 
  icon, 
  title, 
  content, 
  delay 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode;
  delay: number;
}) => {
  return (
    <div 
      className="flex items-start opacity-0" 
      data-animate="fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-omang-lightGreen text-omang-green mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="text-sm text-muted-foreground">{content}</div>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      setLoading(true);
      setStatus(null);

      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.text === 'OK') {
        setStatus({
          message: 'Message sent successfully! We\'ll get back to you soon.',
          type: 'success'
        });
        form.reset();
      }
    } catch (error) {
      setStatus({
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-omang-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span 
              className="inline-block px-4 py-1.5 mb-4 bg-omang-lightGreen text-omang-green rounded-full text-sm font-medium tracking-wide opacity-0"
              data-animate="fade-in"
            >
              Contact Us
            </span>
            
            <h2 
              className="mb-6 opacity-0" 
              data-animate="fade-in"
              style={{ animationDelay: '200ms' }}
            >
              Let's Discuss Your Organic Journey
            </h2>
            
            <p 
              className="mb-10 opacity-0" 
              data-animate="fade-in"
              style={{ animationDelay: '400ms' }}
            >
              Ready to explore premium organic options for your business? Our team is here to assist with your sourcing, labeling, and distribution needs.
            </p>
            
            <div className="space-y-8">
              <ContactItem 
                icon={<MapPin size={20} />}
                title="Head Office:"
                content={
                  <>
                    Omang Organic Foodstuff LLC.<br />
                    Dubai, United Arab Emirates
                  </>
                }
                delay={600}
              />
              
              <ContactItem 
                icon={<Phone size={20} />}
                title="Call Us"
                content={
                  <>
                    Office No : 04- 396 1744 -
                    Mobile No :  058-8232150
                  </>
                }
                delay={800}
              />
              
              <ContactItem 
                icon={<Mail size={20} />}
                title="Email Us"
                content={
                  <>
                    sales@omangorganic.com
                  </>
                }
                delay={1000}
              />
              
              <ContactItem 
                icon={<Clock size={20} />}
                title="Business Hours"
                content={
                  <>
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 2:00 PM
                  </>
                }
                delay={1200}
              />
            </div>
          </div>
          
          <div 
            className="bg-white rounded-lg shadow-sm p-8 opacity-0"
            data-animate="fade-in"
            style={{ animationDelay: '600ms' }}
          >
            <h3 className="text-xl font-medium mb-6">Send Us a Message</h3>
            
            {status && (
              <div className={`p-4 mb-6 rounded-md ${
                status.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                  <input 
                    type="text" 
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-omang-green/40 transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="reply_to" className="block text-sm font-medium text-foreground mb-1">Email</label>
                  <input 
                    type="email" 
                    id="reply_to"
                    name="reply_to"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-omang-green/40 transition-all"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company"
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-omang-green/40 transition-all"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject</label>
                <select 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-omang-green/40 transition-all"
                >
                  <option value="">Select an option</option>
                  <option value="Private Labeling">Private Labeling</option>
                  <option value="Sourcing">Sourcing</option>
                  <option value="Brand Distribution">Brand Distribution</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-omang-green/40 transition-all"
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-3 bg-omang-green text-white rounded-md hover:bg-omang-green/90 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
