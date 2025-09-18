import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import memory1 from '@/assets/memory1.jpg';
import memory2 from '@/assets/memory2.jpg';
import memory3 from '@/assets/memory3.jpg';

const memories = [
  { image: memory1, caption: "Our First Date" },
  { image: memory2, caption: "Beach Sunset Walk" },
  { image: memory3, caption: "Dancing Together" }
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl shadow-romantic">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {memories.map((memory, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img
                src={memory.image}
                alt={memory.caption}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6">
                <p className="text-white font-serif text-lg md:text-xl font-medium">
                  {memory.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full shadow-soft"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary rounded-full shadow-soft"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      <div className="flex justify-center mt-6 space-x-3">
        {memories.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-muted hover:bg-accent'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};