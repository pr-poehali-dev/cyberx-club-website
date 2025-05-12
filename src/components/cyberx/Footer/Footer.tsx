
import Icon from "@/components/ui/icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] py-12 border-t border-[#3A4050]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-montserrat">CyberX</h3>
            <p className="text-gray-400 mb-4 font-rubik">
              Ваш премиальный компьютерный клуб для профессионального гейминга и киберспорта.
            </p>
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
                <SocialLink key={idx} name={social} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-[#3A4050] text-center text-gray-500 font-rubik">
          <p>© {currentYear} CyberX. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  name: string;
}

const SocialLink = ({ name }: SocialLinkProps) => {
  return (
    <a 
      href="#" 
      className="w-9 h-9 rounded-full bg-[#232A3B] flex items-center justify-center hover:bg-[#7C3AED] transition-colors"
    >
      <Icon name={name} className="w-5 h-5" />
    </a>
  );
};

export default Footer;
