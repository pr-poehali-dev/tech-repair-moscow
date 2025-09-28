import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Prices() {
  return (
    <Layout>
      <SEOHead
        title="Цены на ремонт бытовой техники"
        description="Прозрачные цены на ремонт стиральных машин, холодильников, посудомоек в Москве. Фиксированная стоимость без скрытых доплат. Бесплатная диагностика."
        keywords="цены ремонт техники, стоимость ремонта стиральных машин, прайс ремонт холодильников, тарифы ремонт посудомоек"
        canonicalUrl="https://techservice.ru/prices"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Calculator" size={40} className="text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Цены на ремонт <br />
              <span className="text-primary">бытовой техники</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Честные и прозрачные цены без скрытых доплат. Стоимость ремонта фиксируется 
              после диагностики и не изменяется.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/emergency">
                <Button size="lg" className="bg-primary hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать точно
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Общие тарифы */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Базовые тарифы</h2>
            <p className="text-lg text-gray-600">Фиксированные цены на основные услуги</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Диагностика</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">БЕСПЛАТНО</div>
                <p className="text-gray-600 text-sm">При заказе ремонта</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Выезд мастера</h3>
                <div className="text-3xl font-bold text-primary mb-2">500 ₽</div>
                <p className="text-gray-600 text-sm">В пределах МКАД</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Срочный вызов</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">+300 ₽</div>
                <p className="text-gray-600 text-sm">Доплата за срочность</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Гарантия</h3>
                <div className="text-3xl font-bold text-purple-600 mb-2">1 ГОД</div>
                <p className="text-gray-600 text-sm">На все работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Стиральные машины */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ремонт стиральных машин</h2>
            <p className="text-lg text-gray-600">Цены указаны за работу, запчасти оплачиваются отдельно</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена ТЭНа</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1800 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость ТЭНа (от 1200 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старого ТЭНа</li>
                  <li>• Очистка бака от накипи</li>
                  <li>• Установка нового ТЭНа</li>
                  <li>• Проверка работы</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена подшипника</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 2500 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость подшипников (от 800 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Разборка стиральной машины</li>
                  <li>• Извлечение бака</li>
                  <li>• Замена подшипников</li>
                  <li>• Сборка и тестирование</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена помпы</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1500 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость помпы (от 1000 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старой помпы</li>
                  <li>• Очистка системы слива</li>
                  <li>• Установка новой помпы</li>
                  <li>• Проверка слива воды</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена ремня</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1200 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость ремня (от 500 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Снятие задней панели</li>
                  <li>• Установка нового ремня</li>
                  <li>• Настройка натяжения</li>
                  <li>• Проверка вращения барабана</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена манжеты люка</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1600 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость манжеты (от 1500 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж передней панели</li>
                  <li>• Снятие старой манжеты</li>
                  <li>• Установка новой манжеты</li>
                  <li>• Проверка герметичности</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Ремонт блока управления</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 2000 ₽</div>
                <p className="text-gray-600 text-sm mb-4">Диагностика + ремонт платы</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж блока управления</li>
                  <li>• Диагностика в сервис-центре</li>
                  <li>• Ремонт или замена элементов</li>
                  <li>• Установка и программирование</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Холодильники */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ремонт холодильников</h2>
            <p className="text-lg text-gray-600">Стоимость работ по восстановлению холодильного оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Заправка фреоном</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 3000 ₽</div>
                <p className="text-gray-600 text-sm mb-4">Включая фреон R134a</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Поиск места утечки</li>
                  <li>• Устранение утечки</li>
                  <li>• Вакуумирование системы</li>
                  <li>• Заправка хладагентом</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена компрессора</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 8000 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость компрессора</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старого компрессора</li>
                  <li>• Промывка системы</li>
                  <li>• Установка нового компрессора</li>
                  <li>• Заправка и тестирование</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена термостата</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 2200 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость термостата (от 800 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старого термостата</li>
                  <li>• Проверка проводки</li>
                  <li>• Установка нового термостата</li>
                  <li>• Настройка температуры</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Ремонт системы No Frost</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 2800 ₽</div>
                <p className="text-gray-600 text-sm mb-4">Вентилятор, ТЭН оттайки, датчики</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Диагностика системы оттайки</li>
                  <li>• Замена неисправных элементов</li>
                  <li>• Проверка работы вентилятора</li>
                  <li>• Тестирование циклов разморозки</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена уплотнителя</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1800 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость уплотнителя</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старого уплотнителя</li>
                  <li>• Очистка посадочного места</li>
                  <li>• Установка нового уплотнителя</li>
                  <li>• Проверка герметичности</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена лампочки</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 800 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость лампочки (от 200 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Обесточивание холодильника</li>
                  <li>• Демонтаж плафона</li>
                  <li>• Замена лампочки</li>
                  <li>• Проверка включения света</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Посудомойки */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ремонт посудомоечных машин</h2>
            <p className="text-lg text-gray-600">Прайс-лист на ремонт посудомоечного оборудования</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена помпы</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 2000 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость помпы (от 1500 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старой помпы</li>
                  <li>• Очистка системы циркуляции</li>
                  <li>• Установка новой помпы</li>
                  <li>• Проверка подачи воды</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена ТЭНа</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1800 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость ТЭНа (от 1000 ₽)</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старого ТЭНа</li>
                  <li>• Очистка от накипи</li>
                  <li>• Установка нового ТЭНа</li>
                  <li>• Проверка нагрева воды</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Чистка фильтров</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1200 ₽</div>
                <p className="text-gray-600 text-sm mb-4">Полная чистка системы фильтрации</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж всех фильтров</li>
                  <li>• Ультразвуковая очистка</li>
                  <li>• Промывка системы подачи</li>
                  <li>• Установка и проверка</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Замена уплотнителей</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 1500 ₽</div>
                <p className="text-gray-600 text-sm mb-4">+ стоимость уплотнителей</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж старых уплотнителей</li>
                  <li>• Очистка посадочных мест</li>
                  <li>• Установка новых уплотнителей</li>
                  <li>• Проверка герметичности</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Ремонт блока управления</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 2500 ₽</div>
                <p className="text-gray-600 text-sm mb-4">Диагностика и ремонт электроники</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж блока управления</li>
                  <li>• Диагностика в сервис-центре</li>
                  <li>• Ремонт или замена компонентов</li>
                  <li>• Установка и программирование</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Чистка разбрызгивателей</h3>
                <div className="text-2xl font-bold text-primary mb-2">от 900 ₽</div>
                <p className="text-gray-600 text-sm mb-4">Очистка от засоров и накипи</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Демонтаж разбрызгивателей</li>
                  <li>• Очистка форсунок</li>
                  <li>• Промывка специальными средствами</li>
                  <li>• Установка и тестирование</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Доплаты и скидки */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Доплаты и скидки</h2>
            <p className="text-lg text-gray-600">Дополнительные условия формирования стоимости</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Plus" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Доплаты</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>За пределами МКАД (за км)</span>
                    <span className="font-semibold">+30 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Вечернее время (20:00-23:00)</span>
                    <span className="font-semibold">+300 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Ночное время (23:00-8:00)</span>
                    <span className="font-semibold">+700 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Выходные и праздники</span>
                    <span className="font-semibold">+200 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Сложный доступ (выше 5 этажа без лифта)</span>
                    <span className="font-semibold">+300 ₽</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="Percent" size={24} className="text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Скидки</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Пенсионерам (при предъявлении документа)</span>
                    <span className="font-semibold text-green-600">-10%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Постоянным клиентам</span>
                    <span className="font-semibold text-green-600">-15%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Ремонт второй единицы техники</span>
                    <span className="font-semibold text-green-600">-20%</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>При отказе от гарантии</span>
                    <span className="font-semibold text-green-600">-300 ₽</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Оплата наличными</span>
                    <span className="font-semibold text-green-600">-5%</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Нужна точная стоимость ремонта?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Вызывайте мастера для бесплатной диагностики. Озвучим финальную стоимость на месте.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/emergency">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать мастера
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Предварительный расчет
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}