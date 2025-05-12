
import BookingForm from "./BookingForm";
import RoomMap from "./RoomMap";

const BookingSection = () => {
  return (
    <section className="py-20 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
            Схема зала и бронирование
          </span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <RoomMap />
          <BookingForm />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
