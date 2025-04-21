
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  location: string;
  quote: string;
  rating: number;
  image: string;
  petType: string;
}

const TestimonialCard = ({
  name,
  location,
  quote,
  rating,
  image,
  petType
}: TestimonialCardProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={image}
            alt={`${name}'s ${petType}`}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{location}</p>
          </div>
        </div>
        
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
            />
          ))}
        </div>
        
        <blockquote className="text-sm md:text-base">
          "{quote}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
