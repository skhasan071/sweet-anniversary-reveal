import { ImageCarousel } from '@/components/ImageCarousel';
import { EnvelopeReveal } from '@/components/EnvelopeReveal';
import { FloatingHearts } from '@/components/FloatingHearts';
import { MemoryGrid } from '@/components/MemoryGrid';

const Anniversary = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <FloatingHearts />
      
      {/* Landing Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6 animate-fade-in-up">
            Happy Anniversary 💖
          </h1>
          <p className="font-sans text-lg md:text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Celebrating our beautiful journey together
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Memory Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <MemoryGrid />
        </div>
      </section>

      {/* Surprise Section */}
      <section className="py-20 px-4 bg-gradient-romantic">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary mb-12 animate-fade-in-up">
            A Special Message
          </h2>
          <EnvelopeReveal />
        </div>
      </section>

      {/* Ending Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6 animate-scale-in">
            Forever Yours ❤️
          </h2>
          <p className="font-sans text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Here's to many more years of love, laughter, and beautiful memories together
          </p>
        </div>
      </section>
    </div>
  );
};

export default Anniversary;