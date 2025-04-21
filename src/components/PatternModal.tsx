
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Scissors } from "lucide-react";
import MeasurementForm from "./MeasurementForm";

interface PatternModalProps {
  triggerText?: string;
  buttonVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon";
}

const PatternModal = ({
  triggerText = "Создать Выкройку",
  buttonVariant = "default",
  buttonSize = "lg",
}: PatternModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={buttonVariant} size={buttonSize} className="gap-2">
          <Scissors className="h-4 w-4" />
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-softgreen-200 bg-gradient-to-b from-white to-softgreen-100/30">
        <MeasurementForm />
      </DialogContent>
    </Dialog>
  );
};

export default PatternModal;
