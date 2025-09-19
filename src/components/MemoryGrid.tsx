import { Card } from '@/components/ui/card';
import memory1 from '@/assets/memory5.png';
import memory2 from '@/assets/memory6.png';
import memory3 from '@/assets/memory7.jpg';
import memory4 from '@/assets/memory8.png';
import memory5 from '@/assets/memory9.png';
import memory6 from '@/assets/memory10.png';

const memories = [
  {
    image: memory1,
    quote: "So many selfies, we collect, each of them are just perfect."
  },
  {
    image: memory2,
    quote: "So many laughs, we had, each of them are just beautiful."
  },
  {
    image: memory3,
    quote: "So many smiles, we had, each of them are just priceless."
  },
  {
    image: memory4,
    quote: "So many kisses, we did, each of them are just lovely."
  },
  {
    image: memory5,
    quote: "So many places, we explore, each of them are just memorable."
  },
  {
    image: memory6,
    quote: "So many foods, we tried, each of them are just delicious."
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