
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BookingForm = () => {
  return (
    <div className="bg-[#232A3B] p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold mb-4 font-montserrat">Детали бронирования</h3>
      
      <form className="space-y-4 font-rubik">
        <div>
          <label className="block text-sm font-medium mb-1">Выбранные места</label>
          <div className="p-3 bg-[#1A1F2C] rounded-md min-h-[40px] flex items-center">
            <span className="text-sm text-gray-400">Выберите места на схеме</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Дата и время</label>
          <Input 
            type="datetime-local" 
            className="bg-[#1A1F2C] border-[#3A4050]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Продолжительность</label>
          <select className="w-full rounded-md bg-[#1A1F2C] border-[#3A4050] py-2 px-3">
            <option>1 час</option>
            <option>2 часа</option>
            <option>3 часа</option>
            <option>4 часа</option>
            <option>5 часов</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Контактный телефон</label>
          <Input 
            type="tel" 
            placeholder="+7 (___) ___-__-__" 
            className="bg-[#1A1F2C] border-[#3A4050]"
          />
        </div>
        
        <Button className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1E40AF] hover:to-[#4C1D95]">
          Забронировать
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
