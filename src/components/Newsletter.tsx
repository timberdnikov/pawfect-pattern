
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PawPrint } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    toast({
      title: "Спасибо за подписку!",
      description: "Мы будем держать вас в курсе наших новых выкроек и трендов в моде для питомцев.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-16 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <PawPrint className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Присоединяйтесь к Нашему Сообществу
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Подпишитесь, чтобы получать эксклюзивные выкройки, советы по шитью и специальные предложения для ваших питомцев!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email адрес"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button type="submit">Подписаться</Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
