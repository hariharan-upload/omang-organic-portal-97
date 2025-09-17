import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GlobalReachSection from '@/components/GlobalReachSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll-triggered animations using Intersection Observer
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>Omang - Connecting Global Suppliers with Middle Eastern Markets</title>
      <meta name="description" content="Omang connects global suppliers with Middle Eastern markets, offering a wide range of products and services tailored to your needs." />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
    <div className="min-h-screen bg-omang-beige antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <GlobalReachSection />
      <ContactSection />
      <Footer />
    </div>
    </>
  );
};

export default Index;
