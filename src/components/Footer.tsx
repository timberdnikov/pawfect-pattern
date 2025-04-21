
import { PawPrint, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <PawPrint className="h-5 w-5 text-primary" />
              </div>
              <span className="font-quicksand font-bold text-lg">
                Pawfect<span className="text-primary">Pattern</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm">
              Индивидуальные выкройки для питомцев любых форм и размеров. Создаем стильную одежду для ваших пушистых друзей!
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Быстрые Ссылки</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">О Нас</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Как Это Работает</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Библиотека Выкроек</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Руководство по Измерениям</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Отзывы</a></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h3 className="font-bold text-lg mb-4">Помощь и Поддержка</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Частые Вопросы</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Связаться с Нами</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Доставка и Возврат</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Руководство по Размерам</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Политика Конфиденциальности</a></li>
            </ul>
          </div>
          
          {/* Pattern Types */}
          <div>
            <h3 className="font-bold text-lg mb-4">Типы Выкроек</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Свитера для Собак</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Костюмы для Кошек</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Аксессуары для Питомцев</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Праздничные Наряды</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary text-sm">Лежанки и Домики</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PawfectPattern. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Условия</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Конфиденциальность</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Файлы Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
