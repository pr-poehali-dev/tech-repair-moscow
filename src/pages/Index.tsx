import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      <SEOHead
        title="Главная"
        description="Профессиональный ремонт бытовой техники в Москве: стиральных машин, холодильников, посудомоечных машин. Выезд мастера в течение часа, ремонт в день обращения, гарантия 1 год."
        keywords="ремонт бытовой техники, ремонт стиральных машин, ремонт холодильников, ремонт посудомоек, мастер по ремонту техники москва"
        canonicalUrl="https://techservice.ru"
      />
      <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ТехСервис</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
              <a href="#warranty" className="text-gray-600 hover:text-primary transition-colors">Гарантии</a>
            </div>
            <Button className="bg-primary hover:bg-blue-700 text-white px-6 py-2">
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Экстренный ремонт <br />
              <span className="text-primary">бытовой техники</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Выезд мастера в течение часа. Ремонт в день обращения. 
              Профессиональная диагностика и качественный сервис в Москве.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
              <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Срочный вызов
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            
            {/* Emergency Banner */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-md mx-auto animate-fade-in">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="AlertCircle" size={20} className="text-red-500" />
                <span className="text-red-700 font-semibold">Работаем круглосуточно</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h3>
            <p className="text-lg text-gray-600">Ремонтируем все виды бытовой техники</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shirt" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Стиральные машины</h4>
                <p className="text-gray-600 mb-6">
                  Ремонт всех марок: Samsung, LG, Bosch, Indesit, Ariston и других. 
                  Замена подшипников, ремней, насосов.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Не включается</li>
                  <li>• Не сливает воду</li>
                  <li>• Сильная вибрация</li>
                  <li>• Не греет воду</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="UtensilsCrossed" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Посудомоечные машины</h4>
                <p className="text-gray-600 mb-6">
                  Диагностика и ремонт посудомоек. Замена фильтров, насосов, 
                  датчиков. Устранение протечек.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Не включается</li>
                  <li>• Плохо моет посуду</li>
                  <li>• Протечки воды</li>
                  <li>• Не сушит посуду</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Refrigerator" size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold mb-4">Холодильники</h4>
                <p className="text-gray-600 mb-6">
                  Ремонт холодильников и морозильных камер. Заправка фреоном, 
                  замена компрессоров, термостатов.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Не холодит</li>
                  <li>• Течет вода</li>
                  <li>• Сильный шум</li>
                  <li>• Не морозит</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Почему выбирают нас</h3>
            <p className="text-lg text-gray-600">Быстро, качественно, с гарантией</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Быстрый выезд</h4>
              <p className="text-gray-600 text-sm">Выезд мастера в течение часа после звонка</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Ремонт в день обращения</h4>
              <p className="text-gray-600 text-sm">90% ремонтов выполняем сразу на месте</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Гарантия 1 год</h4>
              <p className="text-gray-600 text-sm">Письменная гарантия на все виды работ</p>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wallet" size={32} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Фиксированные цены</h4>
              <p className="text-gray-600 text-sm">Стоимость не изменится после диагностики</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Прайс-лист</h3>
            <p className="text-lg text-gray-600">Прозрачные цены без скрытых доплат</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Диагностика</h4>
                <div className="text-2xl font-bold text-primary mb-2">Бесплатно</div>
                <p className="text-gray-600 text-sm">При заказе ремонта</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Вызов мастера</h4>
                <div className="text-2xl font-bold text-primary mb-2">1000 ₽</div>
                <p className="text-gray-600 text-sm">В пределах МКАД</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Замена подшипника</h4>
                <div className="text-2xl font-bold text-primary mb-2">от 2500 ₽</div>
                <p className="text-gray-600 text-sm">Стиральная машина</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Замена ТЭНа</h4>
                <div className="text-2xl font-bold text-primary mb-2">от 1800 ₽</div>
                <p className="text-gray-600 text-sm">Стиральная машина</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Ремонт помпы</h4>
                <div className="text-2xl font-bold text-primary mb-2">от 2000 ₽</div>
                <p className="text-gray-600 text-sm">Посудомойка</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h4 className="font-semibold mb-4">Заправка фреоном</h4>
                <div className="text-2xl font-bold text-primary mb-2">от 3000 ₽</div>
                <p className="text-gray-600 text-sm">Холодильник</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">+7 (495) 123-45-67</div>
                    <div className="text-gray-600">Круглосуточно, без выходных</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Москва и МО</div>
                    <div className="text-gray-600">Выезжаем во все районы</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">info@techservice.ru</div>
                    <div className="text-gray-600">Ответим в течение часа</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="p-8">
                  <h4 className="text-xl font-semibold mb-6">Заказать вызов мастера</h4>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Тип техники</label>
                      <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option>Стиральная машина</option>
                        <option>Посудомоечная машина</option>
                        <option>Холодильник</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Описание проблемы</label>
                      <textarea 
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Опишите что случилось с техникой"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-primary hover:bg-blue-700 text-white py-3">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section id="warranty" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Гарантии</h3>
            <p className="text-lg text-gray-600">Мы уверены в качестве нашей работы</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="FileText" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Письменная гарантия</h4>
                    <p className="text-gray-600">На все виды работ</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Гарантия на работы: 12 месяцев
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Гарантия на запчасти: 24 месяца
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Бесплатное обслуживание по гарантии
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Выезд по гарантии в течение 24 часов
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Users" size={32} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Опытные мастера</h4>
                    <p className="text-gray-600">Только сертифицированные специалисты</p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Опыт работы от 5 лет
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Регулярное повышение квалификации
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Сертификаты производителей техники
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-500 mr-2" />
                    Полная материальная ответственность
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            context="homepage"
            title="Остались вопросы? Получите консультацию!"
            subtitle="Мастер приедет в удобное время и решит любую проблему с техникой"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-primary" />
                <h5 className="text-xl font-bold">ТехСервис</h5>
              </div>
              <p className="text-gray-400 mb-4">
                Профессиональный ремонт бытовой техники в Москве. 
                Быстро, качественно, с гарантией.
              </p>
              <p className="text-gray-400 text-sm">
                © 2024 ТехСервис. Все права защищены.
              </p>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Услуги</h6>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт стиральных машин</li>
                <li>Ремонт посудомоечных машин</li>
                <li>Ремонт холодильников</li>
                <li>Экстренный выезд</li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Контакты</h6>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@techservice.ru</p>
                <p>Москва и Московская область</p>
                <p>Круглосуточно, без выходных</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </Layout>
  );
}