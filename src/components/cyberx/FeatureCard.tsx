
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-[#232A3B] border-none shadow-xl hover:shadow-[#7C3AED]/20 hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-6">
        <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
          <Icon name={icon} className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-montserrat">{title}</h3>
        <p className="text-gray-300 font-rubik">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
