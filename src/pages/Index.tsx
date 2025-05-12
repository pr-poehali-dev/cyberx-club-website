
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const Index = () => {
  const { toast } = useToast();
  const [reviewText, setReviewText] = useState("");
  const [name, setName] = useState("");

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewText.trim() && name.trim()) {
      toast({
        title: "Спасибо за отзыв!",
        description: "Ваше мнение очень важно для нас.",
      });
      setReviewText("");
      setName("");
    } else {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все поля.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1F2C]/80 to-[#1A1F2C]/40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              CyberX
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-rubik">
              Погрузитесь в мир киберспорта и профессионального гейминга
              в нашем премиальном компьютерном клубе
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1E40AF] hover:to-[#4C1D95] text-white shadow-lg transition-all hover:shadow-[#7C3AED]/20 hover:shadow-xl">
                Забронировать место
              </Button>
              <Button variant="outline" size="lg" className="border-[#7C3AED] text-white hover:bg-[#7C3AED]/10">
                О нас
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Почему выбирают нас
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Monitor",
                title: "Мощные компьютеры",
                desc: "Игровые станции с топовым железом для максимальной производительности",
              },
              {
                icon: "Gamepad2",
                title: "Комфортная атмосфера",
                desc: "Эргономичные кресла и удобные игровые зоны для длительных сессий",
              },
              {
                icon: "Headphones",
                title: "Профессиональная периферия",
                desc: "Высококлассные мыши, клавиатуры и гарнитуры для идеального геймплея",
              },
            ].map((feature, idx) => (
              <Card key={idx} className="bg-[#232A3B] border-none shadow-xl hover:shadow-[#7C3AED]/20 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">{feature.title}</h3>
                  <p className="text-gray-300 font-rubik">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PC Specs Section */}
      <section className="py-20 bg-[#232A3B]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Наши игровые станции
            </span>
          </h2>
          
          <Tabs defaultValue="pro" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 bg-[#1A1F2C]">
              <TabsTrigger value="standard" className="flex-1 font-rubik">
                Standard
              </TabsTrigger>
              <TabsTrigger value="pro" className="flex-1 font-rubik">
                Pro
              </TabsTrigger>
              <TabsTrigger value="elite" className="flex-1 font-rubik">
                Elite
              </TabsTrigger>
            </TabsList>
            
            {["standard", "pro", "elite"].map((tier, idx) => {
              const specs = {
                standard: {
                  cpu: "Intel Core i5-11600K",
                  gpu: "NVIDIA GeForce RTX 3060",
                  ram: "16GB DDR4 3200MHz",
                  storage: "512GB NVMe SSD",
                  display: "24\" 144Hz IPS",
                  peripherals: "HyperX мышь/клавиатура, Razer гарнитура",
                  price: "150 ₽/час",
                  image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=1000",
                },
                pro: {
                  cpu: "Intel Core i7-12700K",
                  gpu: "NVIDIA GeForce RTX 3080",
                  ram: "32GB DDR4 3600MHz",
                  storage: "1TB NVMe SSD",
                  display: "27\" 240Hz IPS",
                  peripherals: "Logitech G Pro мышь/клавиатура, Steelseries гарнитура",
                  price: "250 ₽/час",
                  image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&q=80&w=1000",
                },
                elite: {
                  cpu: "Intel Core i9-12900K",
                  gpu: "NVIDIA GeForce RTX 4090",
                  ram: "64GB DDR5 5600MHz",
                  storage: "2TB NVMe SSD",
                  display: "32\" 360Hz IPS",
                  peripherals: "Razer Pro мышь/клавиатура, Sennheiser гарнитура",
                  price: "350 ₽/час",
                  image: "https://images.unsplash.com/photo-1592840062661-a5f161c37a9b?auto=format&fit=crop&q=80&w=1000",
                },
              };
              
              const currentSpecs = specs[tier as keyof typeof specs];
              
              return (
                <TabsContent key={tier} value={tier} className="focus-visible:outline-none">
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
                        {[
                          { label: "Процессор", value: currentSpecs.cpu, icon: "Cpu" },
                          { label: "Видеокарта", value: currentSpecs.gpu, icon: "Tv" },
                          { label: "Оперативная память", value: currentSpecs.ram, icon: "Memory" },
                          { label: "Хранилище", value: currentSpecs.storage, icon: "HardDrive" },
                          { label: "Монитор", value: currentSpecs.display, icon: "Monitor" },
                          { label: "Периферия", value: currentSpecs.peripherals, icon: "Keyboard" },
                        ].map((spec, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="bg-[#2563EB]/20 p-2 rounded-md">
                              <Icon name={spec.icon} className="w-5 h-5 text-[#2563EB]" />
                            </div>
                            <div>
                              <p className="text-gray-400 text-sm">{spec.label}</p>
                              <p className="font-medium">{spec.value}</p>
                            </div>
                          </div>
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
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-[#1A1F2C]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Схема зала и бронирование
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#232A3B] p-6 rounded-lg shadow-xl">
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Выберите место</h3>
              
              <div className="w-full h-[400px] relative bg-[#1A1F2C]/50 rounded-lg p-4 overflow-auto">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-10 bg-[#2563EB]/20 rounded flex items-center justify-center text-sm text-[#2563EB]">
                  ВХОД
                </div>
                
                <div className="grid grid-cols-5 gap-4 mt-20">
                  {Array.from({ length: 20 }).map((_, idx) => {
                    const isBooked = [3, 7, 12, 15].includes(idx);
                    const isPro = [0, 1, 2, 3, 4].includes(idx);
                    const isElite = [5, 6, 7, 8, 9].includes(idx);
                    
                    return (
                      <div 
                        key={idx}
                        className={`
                          aspect-square rounded-lg flex items-center justify-center cursor-pointer transition-all
                          ${isBooked 
                            ? 'bg-red-500/20 text-red-500 cursor-not-allowed' 
                            : isPro 
                              ? 'bg-[#2563EB]/20 text-[#2563EB] hover:bg-[#2563EB]/40' 
                              : isElite 
                                ? 'bg-[#7C3AED]/20 text-[#7C3AED] hover:bg-[#7C3AED]/40' 
                                : 'bg-gray-700/30 text-gray-300 hover:bg-gray-700/50'
                          }
                        `}
                      >
                        {idx + 1}
                      </div>
                    );
                  })}
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
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#232A3B]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-montserrat">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2563EB] to-[#7C3AED]">
              Отзывы посетителей
            </span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                {
                  name: "Алексей П.",
                  rating: 5,
                  comment: "Лучший компьютерный клуб в городе! Оборудование топовое, приятная атмосфера. Особенно порадовали комфортные кресла - спина не болит даже после 4 часов игры.",
                  date: "15.04.2025",
                },
                {
                  name: "Мария С.",
                  rating: 4,
                  comment: "Отличное место для командных игр с друзьями. Wi-Fi стабильный, никаких лагов. Единственный минус - в выходные бывает сложно забронировать место.",
                  date: "02.04.2025",
                },
                {
                  name: "Дмитрий К.",
                  rating: 5,
                  comment: "Регулярно посещаю этот клуб уже полгода. Персонал всегда дружелюбный и готов помочь. Elite станции просто космос - играю в Cyberpunk на максималках без проблем!",
                  date: "28.03.2025",
                },
              ].map((review, idx) => (
                <Card key={idx} className="bg-[#1A1F2C] border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex justify-between mb-2">
                      <div className="font-medium font-montserrat">{review.name}</div>
                      <div className="text-sm text-gray-400 font-rubik">{review.date}</div>
                    </div>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-600'}`}
                          fill={i < review.rating ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 font-rubik">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
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
                        className="w-6 h-6 cursor-pointer hover:text-yellow-400 transition-colors"
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
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1A1F2C] py-12 border-t border-[#3A4050]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 font-montserrat">CyberX</h3>
              <p className="text-gray-400 mb-4 font-rubik">Ваш премиальный компьютерный клуб для профессионального гейминга и киберспорта.</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 font-montserrat">Контакты</h4>
              <ul className="space-y-2 text-gray-400 font-rubik">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="w-4 h-4 text-[#7C3AED]" />
                  Москва, ул. Гейминга, 42
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4 text-[#7C3AED]" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4 text-[#7C3AED]" />
                  info@cyberx.ru
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 font-montserrat">Время работы</h4>
              <ul className="space-y-2 text-gray-400 font-rubik">
                <li>Пн-Чт: 10:00 - 23:00</li>
                <li>Пт-Сб: 10:00 - 02:00</li>
                <li>Вс: 12:00 - 23:00</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 font-montserrat">Соцсети</h4>
              <div className="flex gap-4">
                {["Instagram", "Twitter", "Facebook", "Youtube"].map((social, idx) => (
                  <a 
                    key={idx}
                    href="#" 
                    className="w-9 h-9 rounded-full bg-[#232A3B] flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
                  >
                    <Icon name={social} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-[#3A4050] text-center text-gray-500 font-rubik">
            <p>© {new Date().getFullYear()} CyberX. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
