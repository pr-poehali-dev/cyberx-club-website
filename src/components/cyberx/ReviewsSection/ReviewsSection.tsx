
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { reviews } from "./reviewsData";

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-[#232A3B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
            Отзывы посетителей
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <ReviewCard 
                key={idx}
                name={review.name}
                rating={review.rating}
                comment={review.comment}
                date={review.date}
              />
            ))}
          </div>
          
          <ReviewForm />
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
