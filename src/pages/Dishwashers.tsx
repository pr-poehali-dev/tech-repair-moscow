import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Dishwashers() {
  return (
    <Layout>
      <SEOHead
        title="Ремонт посудомоечных машин в Москве"
        description="Ремонт посудомоечных машин всех марок в Москве: Bosch, Siemens, Electrolux, Whirlpool. Выезд мастера за час, диагностика бесплатно. Гарантия 1 год."
        keywords="ремонт посудомоечных машин, ремонт посудомойки москва, мастер по посудомойкам, bosch siemens electrolux ремонт"
        canonicalUrl="https://techservice.ru/dishwashers"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="UtensilsCrossed" size={40} className="text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ремонт посудомоечных машин <br />
              <span className="text-primary">в Москве</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональный ремонт посудомоечных машин: Bosch, Siemens, Electrolux, Whirlpool, Candy. 
              Быстрая диагностика, качественный ремонт, гарантия на работы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/emergency">
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
              </Link>
              <Link to="/prices">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Узнать стоимость
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Типичные неисправности */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые поломки посудомоечных машин</h2>
            <p className="text-lg text-gray-600">Решаем любые проблемы с посудомойками быстро и качественно</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Power" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не включается</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Проблемы с электроникой, блоком управления, дверным замком или сетевым кабелем.
                </p>
                <div className="text-primary font-semibold">от 1500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplets" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не набирает воду</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Засор фильтра подачи воды, неисправность клапана или датчика уровня воды.
                </p>
                <div className="text-primary font-semibold">от 1800 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Плохо моет посуду</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Засор форсунок разбрызгивателей, износ помпы или проблемы с нагревом воды.
                </p>
                <div className="text-primary font-semibold">от 1200 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplet" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Протечка воды</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Повреждение уплотнителей дверцы, шлангов или внутренних патрубков.
                </p>
                <div className="text-primary font-semibold">от 1500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Wind" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не сушит посуду</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Неисправность ТЭНа сушки, вентилятора или датчика температуры.
                </p>
                <div className="text-primary font-semibold">от 2000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Icon name="Volume2" size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Шумит при работе</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Износ подшипников помпы, попадание посторонних предметов в фильтр.
                </p>
                <div className="text-primary font-semibold">от 1800 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Марки посудомоечных машин */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Работаем со всеми брендами</h2>
            <p className="text-lg text-gray-600">Профессиональный ремонт посудомоечных машин любых производителей</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Bosch', 'Siemens', 'Electrolux', 'Whirlpool', 'Candy', 'Gorenje',
              'Miele', 'AEG', 'Zanussi', 'Indesit', 'Ariston', 'Samsung'
            ].map((brand) => (
              <div key={brand} className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-gray-700">{brand.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{brand}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Полезные советы */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Полезные советы</h2>
            <p className="text-lg text-gray-600">Как продлить срок службы посудомоечной машины</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplets" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Регулярная очистка</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Очищайте фильтр каждые 2-3 недели
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Протирайте уплотнители дверцы
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Запускайте холостую мойку с очистителем
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Проверяйте разбрызгиватели на засоры
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Utensils" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Правильная загрузка</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Убирайте остатки пищи с посуды
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Не перегружайте машину
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Размещайте посуду правильно
                  </li>
                  <li className="flex items-start">
                    <Icon name="Check" size={16} className="text-green-500 mr-2 mt-1" />
                    Используйте качественные моющие средства
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
            context="dishwashers"
            title="Посудомойка вышла из строя?"
            subtitle="Быстрая диагностика и профессиональный ремонт. Восстановим работу в кратчайшие сроки!"
          />
        </div>
      </section>
    </Layout>
  );
}