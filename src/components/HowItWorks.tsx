
import { Ruler, FileText, Download, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Измерьте Питомца",
    description: "Сделайте несколько простых замеров вашего питомца, следуя нашей понятной инструкции.",
    icon: <Ruler className="h-6 w-6" />,
    color: "bg-peach-100"
  },
  {
    title: "Выберите Выкройку",
    description: "Выберите из нашей растущей библиотеки выкроек одежды и аксессуаров для питомцев.",
    icon: <FileText className="h-6 w-6" />,
    color: "bg-skyblue-100"
  },
  {
    title: "Скачайте и Распечатайте",
    description: "Получите вашу выкройку по индивидуальным меркам в формате PDF или SVG.",
    icon: <Download className="h-6 w-6" />,
    color: "bg-softgreen-100"
  },
  {
    title: "Шейте и Наслаждайтесь",
    description: "Следуйте нашим подробным инструкциям, чтобы создать идеально сидящую одежду для вашего питомца.",
    icon: <Sparkles className="h-6 w-6" />,
    color: "bg-peach-100"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как Это Работает</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Создание одежды для питомцев по индивидуальным меркам никогда не было проще. Просто следуйте этим шагам!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <div className="text-primary">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="#" 
            className="text-primary font-medium flex items-center hover:underline"
          >
            Смотреть руководство по измерениям
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
