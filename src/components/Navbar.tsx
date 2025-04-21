
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors, PawPrint } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <PawPrint className="h-6 w-6 text-primary" />
          </div>
          <span className="font-quicksand font-bold text-xl md:text-2xl">
            Pawfect<span className="text-primary">Pattern</span>
          </span>
        </a>
        
        {/* Mobile menu button */}
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">Как Это Работает</a>
          <a href="#patterns" className="text-foreground hover:text-primary transition-colors">Выкройки</a>
          <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
          <Button className="flex items-center gap-2">
            <Scissors className="h-4 w-4" />
            Начать
          </Button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-3">
            <a 
              href="#how-it-works" 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Как Это Работает
            </a>
            <a 
              href="#patterns" 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Выкройки
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Отзывы
            </a>
            <Button className="flex items-center gap-2 w-full justify-center">
              <Scissors className="h-4 w-4" />
              Начать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
