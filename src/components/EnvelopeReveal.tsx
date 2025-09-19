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

  const loveLetterText = `My Dearest Baeby,

On 19th September 2022, I first saw you, and on the next day we first time have a short talk. The turning point of my life. We collected so many memories from that day until now. Every moment with you is just blessing for me.

Thank you for being there with me always, you helped me so much throughout my college life & now also if you can't do physically you're alway there whenever I need you. I can't express how much you mean to me and that day when you first reply to me. Everything is just dream come true for me. If this is a dream, I wish I never wake up.

I love you, and I love you itna that I can never express in words. You are my sunshine, my bestfriend, my everything. I promise to always be there for you, to support you, and to love you unconditionally.

You are my forever and I really look forward to make this 3 years to 30 years to 300 years & to keep it till eternity.

I love you my baeby. Happy Anniversary! 💖

Mera gudiya, Meri baeby.
Happy Anniversary! 💕`;

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