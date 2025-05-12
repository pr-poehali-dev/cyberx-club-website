
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070')",
          filter: "brightness(0.4)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/80 to-[#1A1F2C]/40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
            CyberX
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-rubik">
            Погрузитесь в мир киберспорта и профессионального гейминга
            в нашем премиальном компьютерном клубе
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1E40AF] hover:to-[#4C1D95] text-white shadow-lg transition-all hover:shadow-[#7C3AED]/20 hover:shadow-xl">
              Забронировать место
            </Button>
            <Button variant="outline" size="lg" className="border-[#7C3AED] text-white hover:bg-[#7C3AED]/10">
              О нас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
