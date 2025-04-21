import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, ArrowRight, Ruler, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import TestimonialCard from "@/components/TestimonialCard";
import PatternCategory from "@/components/PatternCategory";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import PatternModal from "@/components/PatternModal";

const Index = () => {
  const testimonials = [
    {
      name: "Сара Джонсон",
      location: "Портленд",
      quote: "Моя такса Пинат выглядит очаровательно в своем свитере! Выкройка была очень понятной и идеально подошла.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000",
      petType: "собака"
    },
    {
      name: "Михаил Торрес",
      location: "Чикаго",
      quote: "Выкройка костюма на Хэллоуин для моего кота произвела фурор! Всем на параде питомцев понравился его маленький плащ вампира!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000",
      petType: "кот"
    },
    {
      name: "Эмили Чен",
      location: "Сиэтл",
      quote: "Как начинающая швея, я переживала о пошиве одежды для моего французского бульдога, но эти выкройки так хорошо объяснены. Дождевик получился идеальным!",
      rating: 4,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000",
      petType: "собака"
    }
  ];

  const patternCategories = [
    {
      title: "Свитера и Пальто для Собак",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000",
      description: "Держите вашего питомца в тепле и стиле",
      count: 24
    },
    {
      title: "Костюмы для Кошек",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1000",
      description: "Очаровательные наряды для пушистых друзей",
      count: 18
    },
    {
      title: "Аксессуары для Питомцев",
      image: "https://images.unsplash.com/photo-1583337426008-2fef51aa841e?q=80&w=1000",
      description: "Бандану, бабочки и многое другое",
      count: 32
    },
    {
      title: "Лежанки и Пледы",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000",
      description: "Уютный комфорт для ваших компаньонов",
      count: 15
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-secondary/20 pt-16 md:pt-24 pb-24 md:pb-32 overflow-hidden paw-pattern">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Идеальные Выкройки <br />
                <span className="text-primary">Для Ваших Питомцев</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
                Индивидуальные выкройки, созданные по меркам вашего питомца. Создавайте милую и удобную одежду для ваших пушистых друзей!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <PatternModal />
                <Button size="lg" variant="outline" className="gap-2">
                  <Ruler className="h-4 w-4" />
                  Руководство по Измерениям
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative">
              <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000" 
                  alt="Dog wearing custom sweater" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 transform rotate-6 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000" 
                  alt="Cat with bowtie" 
                  className="w-32 h-32 rounded-lg object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 transform -rotate-6 animate-float" style={{ animationDelay: "1s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1583337426008-2fef51aa841e?q=80&w=1000" 
                  alt="Pet accessory" 
                  className="w-24 h-24 rounded-lg object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-peach-100 flex items-center justify-center mb-4">
                  <Ruler className="h-6 w-6 text-peach-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Индивидуальный Размер</h3>
                <p className="text-muted-foreground">
                  Выкройки автоматически подстраиваются под размеры вашего питомца для идеальной посадки.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-skyblue-100 flex items-center justify-center mb-4">
                  <Scissors className="h-6 w-6 text-skyblue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Простые Инструкции</h3>
                <p className="text-muted-foreground">
                  Пошаговые инструкции с понятными схемами, подходящие для швей любого уровня.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-softgreen-100 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-softgreen-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Одобрено Питомцами</h3>
                <p className="text-muted-foreground">
                  Разработано с учетом комфорта вашего питомца, особое внимание уделено движению и удобству.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Pattern Categories */}
      <section id="patterns" className="py-16 md:py-24 bg-accent/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Исследуйте Нашу Коллекцию</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Просмотрите наши тщательно разработанные выкройки для питомцев всех форм и размеров.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:gri-cols-2 lg:grid-cols-4 gap-6">
            {patternCategories.map((category, index) => (
              <PatternCategory key={index} {...category} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="outline" className="gap-2">
              Смотреть Все Категории
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Счастливые Питомцы и Хозяева</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Посмотрите, что думают о наших выкройках наши клиенты и их пушистые друзья.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы Одеть Вашего Питомца Стильно?
            </h2>
            <p className="text-lg mb-8">
              Создайте свою первую индивидуальную выкройку сегодня и присоединяйтесь к тысячам довольных владельцев питомцев!
            </p>
            <PatternModal />
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <Newsletter />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
