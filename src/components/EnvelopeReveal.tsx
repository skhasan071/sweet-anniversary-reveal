import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import envelopeClosed from '@/assets/envelope-closed.png';
import envelopeOpen from '@/assets/envelope-open.png';

export const EnvelopeReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setTimeout(() => setShowHearts(true), 800);
  };

  const loveLetterText = `My Dearest Love,

Every day with you feels like a beautiful dream that I never want to wake up from. You are my sunshine on cloudy days, my anchor in stormy seas, and my greatest adventure.

Thank you for filling my life with laughter, love, and countless precious memories. Here's to many more years of growing old together, creating new memories, and loving each other more deeply with each passing day.

You are my forever and always.

With all my love,
Your Devoted Partner 💕`;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative mb-8">
        <img
          src={isRevealed ? envelopeOpen : envelopeClosed}
          alt={isRevealed ? "Open envelope" : "Closed envelope"}
          className={`w-64 md:w-80 transition-all duration-800 ${
            isRevealed ? 'animate-scale-in' : 'animate-float'
          }`}
        />
        
        {showHearts && (
          <>
            {[...Array(6)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-primary animate-heart-float"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`,
                  fontSize: `${16 + Math.random() * 8}px`,
                }}
                fill="currentColor"
              />
            ))}
          </>
        )}
      </div>

      {!isRevealed && (
        <Button
          onClick={handleReveal}
          className="bg-gradient-love hover:shadow-floating transition-all duration-300 transform hover:scale-105 text-white font-serif text-lg px-8 py-3 rounded-full"
        >
          Reveal Surprise 💌
        </Button>
      )}

      {isRevealed && (
        <div className="animate-fade-in-up bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-romantic max-w-2xl mx-4">
          <div className="font-serif text-card-foreground leading-relaxed whitespace-pre-line text-center md:text-left">
            {loveLetterText}
          </div>
        </div>
      )}
    </div>
  );
};