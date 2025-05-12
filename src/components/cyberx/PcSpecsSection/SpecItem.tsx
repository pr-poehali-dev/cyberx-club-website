
import Icon from "@/components/ui/icon";

interface SpecItemProps {
  label: string;
  value: string;
  icon: string;
}

const SpecItem = ({ label, value, icon }: SpecItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#2563EB]/20 p-2 rounded-md">
        <Icon name={icon} className="w-5 h-5 text-[#2563EB]" />
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default SpecItem;
