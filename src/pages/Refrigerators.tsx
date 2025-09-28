import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Refrigerators() {
  return (
    <Layout>
      <SEOHead
        title="Ремонт холодильников в Москве"
        description="Ремонт холодильников всех марок в Москве: Samsung, LG, Bosch, Indesit, Атлант. Заправка фреоном, замена компрессора. Выезд мастера за час, гарантия 1 год."
        keywords="ремонт холодильников, ремонт холодильника москва, заправка фреоном, замена компрессора, samsung lg bosch ремонт"
        canonicalUrl="https://techservice.ru/refrigerators"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Refrigerator" size={40} className="text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Ремонт холодильников <br />
              <span className="text-primary">в Москве</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Профессиональный ремонт холодильников всех марок: Samsung, LG, Bosch, Indesit, Атлант, Liebherr. 
              Заправка фреоном, замена компрессоров, ремонт системы No Frost.
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

      {/* Частые поломки */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Частые поломки холодильников</h2>
            <p className="text-lg text-gray-600">Диагностируем и устраняем любые неисправности холодильного оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Thermometer" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не холодит</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Утечка фреона, неисправность компрессора, термостата или засор капиллярной трубки.
                </p>
                <div className="text-primary font-semibold">от 2000 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Snowflake" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не морозит</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Проблемы с морозильной камерой: утечка хладагента, засор или поломка компрессора.
                </p>
                <div className="text-primary font-semibold">от 2500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Volume2" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Сильно шумит</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Износ компрессора, вентилятора, неправильная установка или проблемы с амортизаторами.
                </p>
                <div className="text-primary font-semibold">от 1500 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplets" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Течет вода</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Засор дренажной системы, повреждение уплотнителей или проблемы с оттайкой.
                </p>
                <div className="text-primary font-semibold">от 1200 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Power" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Не включается</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Проблемы с электропитанием, блоком управления, термостатом или пускозащитным реле.
                </p>
                <div className="text-primary font-semibold">от 1800 ₽</div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Постоянно работает</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Неисправность термостата, утечка фреона или проблемы с уплотнителем дверцы.
                </p>
                <div className="text-primary font-semibold">от 1500 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Виды работ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Виды ремонтных работ</h2>
            <p className="text-lg text-gray-600">Полный спектр услуг по ремонту холодильного оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplet" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Заправка фреоном</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Поиск и устранение утечек, вакуумирование системы, заправка хладагентом.
                </p>
                <div className="text-primary font-semibold">от 3000 ₽</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Settings" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Замена компрессора</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Полная замена компрессора с промывкой системы и заправкой фреоном.
                </p>
                <div className="text-primary font-semibold">от 8000 ₽</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Thermometer" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Замена термостата</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Диагностика и замена терморегулятора, настройка температурных режимов.
                </p>
                <div className="text-primary font-semibold">от 2200 ₽</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Icon name="Fan" size={24} className="text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Ремонт No Frost</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Замена вентилятора, ТЭНа оттайки, датчиков системы автоматической разморозки.
                </p>
                <div className="text-primary font-semibold">от 2800 ₽</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Lock" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Замена уплотнителя</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Установка новых резиновых уплотнителей дверцы для герметичности камер.
                </p>
                <div className="text-primary font-semibold">от 1800 ₽</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Icon name="Lightbulb" size={24} className="text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Замена лампочки</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Замена внутреннего освещения, ремонт системы включения/выключения света.
                </p>
                <div className="text-primary font-semibold">от 800 ₽</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Марки холодильников */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ремонтируем все марки</h2>
            <p className="text-lg text-gray-600">Работаем с холодильниками любых производителей</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Samsung', 'LG', 'Bosch', 'Indesit', 'Атлант', 'Liebherr',
              'Electrolux', 'Whirlpool', 'Ariston', 'Beko', 'Hotpoint', 'Sharp'
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

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            context="refrigerators"
            title="Холодильник перестал работать?"
            subtitle="Срочный ремонт холодильников! Сохраним ваши продукты и восстановим работу техники"
          />
        </div>
      </section>
    </Layout>
  );
}