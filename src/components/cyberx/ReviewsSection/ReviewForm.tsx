
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const ReviewForm = () => {
  const { toast } = useToast();
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim() && name.trim()) {
      toast({
        title: "Спасибо за отзыв!",
        description: "Ваше мнение очень важно для нас.",
      });
      setReviewText("");
      setName("");
      setRating(0);
    } else {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="bg-[#1A1F2C] p-6 rounded-lg shadow-xl">
      <h3 className="text-xl font-semibold mb-4 font-montserrat">Оставьте свой отзыв</h3>
      
      <form className="space-y-4 font-rubik" onSubmit={handleReviewSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Ваше имя</label>
          <Input 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Иван Петров" 
            className="bg-[#232A3B] border-[#3A4050]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Ваша оценка</label>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Icon 
                key={i}
                name="Star" 
                className={`w-6 h-6 cursor-pointer transition-colors ${
                  i < rating ? 'text-yellow-400' : 'text-gray-600 hover:text-yellow-400'
                }`}
                fill={i < rating ? 'currentColor' : 'none'}
                onClick={() => setRating(i + 1)}
              />
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Ваш отзыв</label>
          <Textarea 
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Поделитесь своими впечатлениями о нашем клубе..."
            className="bg-[#232A3B] border-[#3A4050] min-h-[120px]"
          />
        </div>
        
        <Button type="submit" className="w-full bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1E40AF] hover:to-[#4C1D95]">
          Отправить отзыв
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
