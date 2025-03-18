
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  delay = 0,
  className 
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "bg-white border border-omang-cream rounded-lg p-6 hover-lift opacity-0",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
      data-animate="scale-in"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-omang-lightGreen text-omang-green mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
