import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingHearts } from '@/components/FloatingHearts';

const Landing = () => {
  const navigate = useNavigate();

  const handleBegin = () => {
    navigate('/anniversary');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      
      {/* Main Content */}
      <div className="text-center px-4 z-20 relative">
        <div className="animate-fade-in-up">
          <Heart 
            className="w-16 h-16 md:w-20 md:h-20 text-primary mx-auto mb-8 animate-float" 
            fill="currentColor" 
          />
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
            Something Special
          </h1>
          
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-medium text-secondary-foreground mb-8">
            Awaits You
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-12 max-w-md mx-auto leading-relaxed">
            A journey through our most cherished memories and a surprise that will warm your heart
          </p>
          
          <Button
            onClick={handleBegin}
            className="bg-gradient-love hover:shadow-floating transition-all duration-500 transform hover:scale-110 text-white font-serif text-xl px-12 py-4 rounded-full shadow-romantic animate-scale-in"
            style={{ animationDelay: '0.5s' }}
          >
            Click to Begin 💖
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-secondary/15 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default Landing;