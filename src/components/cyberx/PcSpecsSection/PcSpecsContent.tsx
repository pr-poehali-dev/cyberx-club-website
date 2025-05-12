
import { Button } from "@/components/ui/button";
import SpecItem from "./SpecItem";
import { pcSpecsData, specItemsConfig } from "./pcSpecsData";

interface PcSpecsContentProps {
  tier: string;
}

const PcSpecsContent = ({ tier }: PcSpecsContentProps) => {
  const currentSpecs = pcSpecsData[tier];
  
  if (!currentSpecs) {
    return <div>Конфигурация не найдена</div>;
  }
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <div className="rounded-lg overflow-hidden shadow-2xl">
        <img 
          src={currentSpecs.image} 
          alt={`${tier} PC`} 
          className="w-full h-[400px] object-cover"
        />
      </div>
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-4 font-montserrat">
          Конфигурация <span className="text-[#7C3AED]">{tier.toUpperCase()}</span>
        </h3>
        
        <div className="space-y-4 font-rubik">
          {specItemsConfig.map((spec, i) => (
            <SpecItem 
              key={i}
              label={spec.label}
              value={currentSpecs[spec.key as keyof typeof currentSpecs]}
              icon={spec.icon}
            />
          ))}
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-700">
          <div>
            <p className="text-gray-400 text-sm font-rubik">Стоимость</p>
            <p className="text-2xl font-semibold font-montserrat">{currentSpecs.price}</p>
          </div>
          <Button className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1E40AF] hover:to-[#4C1D95]">
            Забронировать
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PcSpecsContent;
