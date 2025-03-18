
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const AnimatedImage = ({ src, alt, className, priority = false }: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsLoaded(true);
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  return (
    <div 
      ref={imgRef}
      className={cn(
        "relative overflow-hidden",
        className
      )}
    >
      {isInView && (
        <>
          <div 
            className={cn(
              "absolute inset-0 bg-gray-100",
              isLoaded ? "animate-fade-out" : ""
            )}
          />
          <img
            src={src}
            alt={alt}
            className={cn(
              "w-full h-full object-cover transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedImage;
