import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function WashingMachines() {
  return (
    <Layout>
      <SEOHead
        title="Ремонт стиральных машин в Москве"
        description="Профессиональный ремонт стиральных машин всех марок в Москве. Выезд мастера в течение часа, ремонт в день обращения. Гарантия 1 год. Samsung, LG, Bosch, Indesit."
        keywords="ремонт стиральных машин, ремонт стиралки москва, мастер по стиральным машинам, samsung lg bosch indesit ремонт"
        canonicalUrl="https://techservice.ru/washing-machines"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Shirt" size={40} className="text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ремонт стиральных машин <br />
              <span className="text-primary">в Москве</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ремонтируем стиральные машины всех марок: Samsung, LG, Bosch, Indesit, Ariston, Whirlpool. 
              Выезд мастера в течение часа, ремонт в день обращения.
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

      {/* Популярные поломки */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые поломки стиральных машин</h2>
            <p className="text-lg text-gray-600">Диагностируем и устраняем любые неисправности</p>
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
                  Проблемы с электроникой, блоком управления, сетевым фильтром или замком люка.
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
                  <h3 className="text-lg font-semibold">Не сливает воду</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Засор в помпе, шланге или фильтре. Выход из строя сливного насоса.
                </p>
                <div className="text-primary font-semibold">от 1800 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Thermometer" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не греет воду</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Неисправность ТЭНа (нагревательного элемента) или датчика температуры.
                </p>
                <div className="text-primary font-semibold">от 1800 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Volume2" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Сильная вибрация</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Износ подшипников барабана, амортизаторов или противовесов.
                </p>
                <div className="text-primary font-semibold">от 2500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="RotateCcw" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не крутит барабан</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Обрыв приводного ремня, поломка двигателя или блока управления.
                </p>
                <div className="text-primary font-semibold">от 2000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplet" size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Протечка воды</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Повреждение манжеты люка, патрубков, шлангов или бака стиральной машины.
                </p>
                <div className="text-primary font-semibold">от 1200 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Марки стиральных машин */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ремонтируем все марки</h2>
            <p className="text-lg text-gray-600">Опыт работы с популярными брендами стиральных машин</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Samsung', 'LG', 'Bosch', 'Indesit', 'Ariston', 'Whirlpool',
              'Siemens', 'Electrolux', 'Candy', 'Haier', 'Beko', 'Hotpoint'
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

      {/* Процесс ремонта */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как проходит ремонт</h2>
            <p className="text-lg text-gray-600">Простой и понятный процесс от заявки до результата</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">Заявка</h3>
              <p className="text-gray-600 text-sm">Звоните или оставляйте заявку на сайте. Описываете проблему.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">Выезд мастера</h3>
              <p className="text-gray-600 text-sm">Мастер приезжает в течение часа с инструментами и запчастями.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">Диагностика</h3>
              <p className="text-gray-600 text-sm">Бесплатная диагностика и определение точной причины поломки.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold mb-2">Ремонт</h3>
              <p className="text-gray-600 text-sm">Устраняем поломку на месте. Даем письменную гарантию.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Стиральная машина сломалась?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Не откладывайте ремонт! Чем дольше машина не работает, тем дороже может быть ремонт.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Срочный вызов
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}