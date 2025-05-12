
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PcSpecsContent from "./PcSpecsContent";

const PcSpecsSection = () => {
  const tiers = ["standard", "pro", "elite"];
  
  return (
    <section className="py-20 bg-[#232A3B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
            Наши игровые станции
          </span>
        </h2>
        
        <Tabs defaultValue="pro" className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-8 bg-[#1A1F2C]">
            {tiers.map((tier) => (
              <TabsTrigger key={tier} value={tier} className="flex-1 font-rubik">
                {tier.charAt(0).toUpperCase() + tier.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {tiers.map((tier) => (
            <TabsContent key={tier} value={tier} className="focus-visible:outline-none">
              <PcSpecsContent tier={tier} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PcSpecsSection;
