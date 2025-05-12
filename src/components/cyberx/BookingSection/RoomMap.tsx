
import { useCallback } from "react";

const RoomMap = () => {
  const isBooked = useCallback((idx: number) => {
    return [3, 7, 12, 15].includes(idx);
  }, []);
  
  const getPCTierClass = useCallback((idx: number) => {
    if (isBooked(idx)) {
      return 'bg-red-500/20 text-red-500 cursor-not-allowed';
    }
    
    if ([0, 1, 2, 3, 4].includes(idx)) {
      return 'bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB]/40';
    }
    
    if ([5, 6, 7, 8, 9].includes(idx)) {
      return 'bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/40';
    }
    
    return 'bg-gray-700/30 text-gray-300 hover:bg-gray-700/50';
  }, [isBooked]);
  
  return (
    <div className="lg:col-span-2 bg-[#232A3B] p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold mb-4 font-montserrat">Выберите место</h3>
      
      <div className="w-full h-[400px] relative bg-[#1A1F2C]/50 rounded-lg p-4 overflow-auto">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-10 bg-[#2563EB]/20 rounded flex items-center justify-center text-sm text-[#2563EB]">
          ВХОД
        </div>
        
        <div className="grid grid-cols-5 gap-4 mt-20">
          {Array.from({ length: 20 }).map((_, idx) => (
            <div 
              key={idx}
              className={`
                aspect-square rounded-lg flex items-center justify-center cursor-pointer transition-all
                ${getPCTierClass(idx)}
              `}
            >
              {idx + 1}
            </div>
          ))}
        </div>
        
        <div className="mt-8 flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-700/30 rounded"></div>
            <span className="text-sm">Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#2563EB]/20 rounded"></div>
            <span className="text-sm">Pro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#7C3AED]/20 rounded"></div>
            <span className="text-sm">Elite</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500/20 rounded"></div>
            <span className="text-sm">Занято</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomMap;
