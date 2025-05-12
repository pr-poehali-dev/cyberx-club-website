
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ReviewCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard = ({ name, rating, comment, date }: ReviewCardProps) => {
  return (
    <Card className="bg-[#1A1F2C] border-none shadow-lg">
      <CardContent className="p-6">
        <div className="flex justify-between mb-2">
          <div className="font-medium font-montserrat">{name}</div>
          <div className="text-sm text-gray-400 font-rubik">{date}</div>
        </div>
        
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Icon 
              key={i}
              name="Star" 
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
              fill={i < rating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
        
        <p className="text-gray-300 font-rubik">{comment}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
