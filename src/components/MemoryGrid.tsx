import { Card } from '@/components/ui/card';
import memory1 from '@/assets/memory1.jpg';
import memory2 from '@/assets/memory2.jpg';
import memory3 from '@/assets/memory3.jpg';

const memories = [
  {
    image: memory1,
    quote: "The moment I knew you were the one - sitting across from you at that little café, watching you laugh at my terrible jokes."
  },
  {
    image: memory2,
    quote: "Walking hand in hand as the sun painted the sky in shades of gold, I realized every sunset is more beautiful with you."
  },
  {
    image: memory3,
    quote: "Dancing with you on our wedding day, time stood still and all that mattered was this perfect moment."
  },
  {
    image: memory1,
    quote: "Every ordinary day becomes extraordinary when I'm with you. You make life feel like a beautiful adventure."
  },
  {
    image: memory2,
    quote: "In your arms, I found my home. In your eyes, I found my future. In your heart, I found my love."
  },
  {
    image: memory3,
    quote: "Years may pass and seasons may change, but my love for you grows stronger with each heartbeat."
  }
];

export const MemoryGrid = () => {
  return (
    <div className="text-center">
      <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4 animate-fade-in-up">
        Our Precious Moments
      </h2>
      <p className="font-sans text-lg text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        Every memory with you is a treasure I hold close to my heart
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        {memories.map((memory, index) => (
          <Card 
            key={index} 
            className="overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-romantic transition-all duration-500 transform hover:scale-105 group"
          >
            <div className="relative overflow-hidden">
              <img
                src={memory.image}
                alt={`Memory ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <p className="font-sans text-sm md:text-base text-card-foreground leading-relaxed italic">
                "{memory.quote}"
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};