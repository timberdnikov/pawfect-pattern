
import { Button } from "@/components/ui/button";

interface PatternCategoryProps {
  title: string;
  image: string;
  description: string;
  count: number;
}

const PatternCategory = ({ title, image, description, count }: PatternCategoryProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform group-hover:scale-105 duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        <p className="text-white/80 text-sm mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
            {count} выкроек
          </span>
          <Button size="sm" variant="secondary" className="text-xs">
            Смотреть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PatternCategory;
