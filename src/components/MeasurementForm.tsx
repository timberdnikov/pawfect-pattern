
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Ruler, Scissors, PawPrint } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  neckCircumference: z.string().min(1, { message: "Требуется измерение шеи" }),
  chestCircumference: z.string().min(1, { message: "Требуется измерение груди" }),
  backLength: z.string().min(1, { message: "Требуется измерение спины" }),
  bellyCircumference: z.string().min(1, { message: "Требуется измерение живота" }),
  frontChestWidth: z.string().min(1, { message: "Требуется измерение ширины груди" }),
  legHeight: z.string().min(1, { message: "Требуется измерение высоты лап" }),
  neckToTailLength: z.string().min(1, { message: "Требуется измерение от шеи до хвоста" }),
  lengthToBellyCutout: z.string().min(1, { message: "Требуется измерение до выреза живота" }),
});

type FormValues = z.infer<typeof formSchema>;

const MeasurementForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      neckCircumference: "",
      chestCircumference: "",
      backLength: "",
      bellyCircumference: "",
      frontChestWidth: "",
      legHeight: "",
      neckToTailLength: "",
      lengthToBellyCutout: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/generate-pattern", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          neckCircumference: parseFloat(values.neckCircumference),
          chestCircumference: parseFloat(values.chestCircumference),
          backLength: parseFloat(values.backLength),
          bellyCircumference: parseFloat(values.bellyCircumference),
          frontChestWidth: parseFloat(values.frontChestWidth),
          legHeight: parseFloat(values.legHeight),
          neckToTailLength: parseFloat(values.neckToTailLength),
          lengthToBellyCutout: parseFloat(values.lengthToBellyCutout),
        }),
      });
      
      if (response.ok) {
        toast.success("Ваша выкройка успешно создана!");
        form.reset();
      } else {
        toast.error("Произошла ошибка при создании выкройки. Пожалуйста, попробуйте снова.");
      }
    } catch (error) {
      toast.error("Ошибка сети. Проверьте подключение и попробуйте снова.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-peach-100 flex items-center justify-center">
            <PawPrint className="h-8 w-8 text-peach-500" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Создайте Выкройку для Питомца</h2>
        <p className="text-muted-foreground mt-2">
          Введите размеры вашего питомца для создания индивидуальной выкройки
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="neckCircumference"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Обхват шеи (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chestCircumference"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Обхват груди (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="backLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Длина спины (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="bellyCircumference"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Обхват живота (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="frontChestWidth"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Ширина груди спереди (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="legHeight"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Высота лап (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="neckToTailLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Длина от шеи до хвоста (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lengthToBellyCutout"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Длина до выреза живота (см)
                </FormLabel>
                <FormControl>
                  <Input type="number" step="0.1" placeholder="0.0" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full mt-6 gap-2" 
            disabled={isSubmitting}
          >
            <Scissors className="h-4 w-4" />
            Заказать Выкройку
            {isSubmitting && (
              <div className="h-4 w-4 border-2 border-t-transparent animate-spin rounded-full" />
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default MeasurementForm;
