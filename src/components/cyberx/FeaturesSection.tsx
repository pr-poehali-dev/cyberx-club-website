
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "Monitor",
    title: "Мощные компьютеры",
    desc: "Игровые станции с топовым железом для максимальной производительности",
  },
  {
    icon: "Gamepad2",
    title: "Комфортная атмосфера",
    desc: "Эргономичные кресла и удобные игровые зоны для длительных сессий",
  },
  {
    icon: "Headphones",
    title: "Профессиональная периферия",
    desc: "Высококлассные мыши, клавиатуры и гарнитуры для идеального геймплея",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
            Почему выбирают нас
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard 
              key={idx} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.desc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
