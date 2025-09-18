import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  size: number;
  delay: number;
}

export const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 8; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          size: 16 + Math.random() * 12,
          delay: Math.random() * 2,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute bottom-0 text-primary/30 animate-heart-float"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: '8s',
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};