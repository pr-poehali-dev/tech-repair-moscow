import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ContactFormProps {
  variant?: "default" | "inline" | "sidebar";
  title?: string;
  subtitle?: string;
  context?: string; // для указания откуда пришел запрос
}

export default function ContactForm({ 
  variant = "default", 
  title = "Нужна помощь с техникой?",
  subtitle = "Оставьте заявку и наш мастер перезвонит в течение 5 минут",
  context = "general"
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
    deviceType: "",
    urgency: "normal"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form submitted:", { ...formData, context });
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        problem: "",
        deviceType: "",
        urgency: "normal"
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <Card className={variant === "sidebar" ? "bg-green-50 border-green-200" : "bg-green-50 border-green-200"}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-green-800 mb-2">
            Заявка отправлена!
          </h3>
          <p className="text-green-700">
            Наш мастер перезвонит вам в течение 5 минут
          </p>
        </CardContent>
      </Card>
    );
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Ваше имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Введите ваше имя"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="+7 (999) 123-45-67"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="deviceType" className="block text-sm font-medium text-gray-700 mb-1">
            Тип техники
          </label>
          <select
            id="deviceType"
            name="deviceType"
            value={formData.deviceType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="">Выберите тип техники</option>
            <option value="washing-machine">Стиральная машина</option>
            <option value="dishwasher">Посудомоечная машина</option>
            <option value="refrigerator">Холодильник</option>
            <option value="other">Другая техника</option>
          </select>
        </div>
        <div>
          <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">
            Срочность
          </label>
          <select
            id="urgency"
            name="urgency"
            value={formData.urgency}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          >
            <option value="normal">Обычная</option>
            <option value="urgent">Срочно (в течение часа)</option>
            <option value="emergency">Экстренно (сейчас)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
          Опишите проблему
        </label>
        <textarea
          id="problem"
          name="problem"
          rows={3}
          value={formData.problem}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
          placeholder="Кратко опишите, что случилось с техникой..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-blue-700 text-white py-3"
      >
        {isSubmitting ? (
          <>
            <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
            Отправляем...
          </>
        ) : (
          <>
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок мастера
          </>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="#" className="text-primary hover:underline">
          политикой конфиденциальности
        </a>
      </p>
    </form>
  );

  if (variant === "inline") {
    return (
      <div className="bg-blue-50 p-6 rounded-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{subtitle}</p>
        </div>
        {formContent}
      </div>
    );
  }

  if (variant === "sidebar") {
    return (
      <Card className="sticky top-24">
        <CardHeader>
          <CardTitle className="text-lg text-center">{title}</CardTitle>
          <p className="text-sm text-gray-600 text-center">{subtitle}</p>
        </CardHeader>
        <CardContent>
          {formContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-gray-600">{subtitle}</p>
      </CardHeader>
      <CardContent>
        {formContent}
      </CardContent>
    </Card>
  );
}