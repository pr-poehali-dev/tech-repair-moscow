import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Emergency() {
  return (
    <Layout>
      <SEOHead
        title="Экстренный вызов мастера"
        description="Срочный ремонт бытовой техники в Москве. Выезд мастера в течение часа круглосуточно. Экстренная помощь при поломке стиральных машин, холодильников, посудомоек."
        keywords="экстренный ремонт техники, срочный вызов мастера, круглосуточный ремонт москва, аварийный ремонт"
        canonicalUrl="https://techservice.ru/emergency"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Icon name="AlertCircle" size={48} className="text-red-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              <span className="text-red-600">Экстренный</span> вызов мастера
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Техника сломалась в самый неподходящий момент? Мы работаем круглосуточно! 
              Выезд мастера в течение часа, ремонт на месте.
            </p>
            
            {/* Телефон для срочного вызова */}
            <div className="bg-red-600 text-white rounded-2xl p-8 max-w-md mx-auto mb-8 animate-scale-in">
              <h2 className="text-2xl font-bold mb-4">Круглосуточная линия</h2>
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Icon name="Phone" size={28} />
                <a href="tel:+74951234567" className="text-3xl font-bold hover:underline">
                  +7 (495) 123-45-67
                </a>
              </div>
              <p className="text-red-100">Работаем 24/7 без выходных</p>
            </div>
          </div>
        </div>
      </section>

      {/* Экстренные случаи */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Когда нужен экстренный вызов</h2>
            <p className="text-lg text-gray-600">Ситуации, требующие немедленного вмешательства</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Droplets" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Протечка воды</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Стиральная или посудомоечная машина протекает, затапливает соседей снизу.
                </p>
                <div className="text-red-600 font-semibold">СРОЧНО!</div>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Thermometer" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Холодильник не холодит</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Продукты портятся, особенно критично летом или при наличии лекарств.
                </p>
                <div className="text-red-600 font-semibold">В ТЕЧЕНИЕ ЧАСА</div>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={24} className="text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Короткое замыкание</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Техника искрит, пахнет гарью, выбивает автоматы в щитке.
                </p>
                <div className="text-red-600 font-semibold">НЕМЕДЛЕННО!</div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Стирка перед событием</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Нужно срочно постирать перед важным мероприятием, командировкой.
                </p>
                <div className="text-orange-600 font-semibold">В ДЕНЬ ОБРАЩЕНИЯ</div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="Volume2" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Сильный шум ночью</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Техника работает очень громко, мешает спать семье и соседям.
                </p>
                <div className="text-orange-600 font-semibold">УТРОМ СЛЕДУЮЩЕГО ДНЯ</div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Icon name="UtensilsCrossed" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Посудомойка не открывается</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Заблокирована дверца с посудой внутри, нужна срочная разблокировка.
                </p>
                <div className="text-orange-600 font-semibold">В ТЕЧЕНИЕ 2-3 ЧАСОВ</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Как работает экстренный вызов */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Как работает экстренный вызов</h2>
            <p className="text-lg text-gray-600">Быстрый алгоритм решения проблемы</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">1</div>
              <h3 className="font-semibold mb-2">Звонок</h3>
              <p className="text-gray-600 text-sm">Звоните по номеру +7 (495) 123-45-67. Оператор примет заявку за 2 минуты.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">2</div>
              <h3 className="font-semibold mb-2">Выезд</h3>
              <p className="text-gray-600 text-sm">Мастер выезжает в течение 30-60 минут с набором инструментов.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">3</div>
              <h3 className="font-semibold mb-2">Диагностика</h3>
              <p className="text-gray-600 text-sm">Быстрая диагностика на месте за 10-15 минут. Определение причины.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">4</div>
              <h3 className="font-semibold mb-2">Ремонт</h3>
              <p className="text-gray-600 text-sm">Устранение поломки на месте или временная стабилизация работы.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Стоимость экстренного вызова */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Стоимость экстренного вызова</h2>
            <p className="text-lg text-gray-600">Фиксированные цены без скрытых доплат</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Обычное время</h3>
                <div className="text-gray-500 mb-2">Пн-Пт: 8:00-20:00</div>
                <div className="text-gray-500 mb-6">Сб-Вс: 9:00-18:00</div>
                <div className="text-3xl font-bold text-primary mb-4">500 ₽</div>
                <p className="text-gray-600 text-sm">Выезд мастера в пределах МКАД</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Вечернее время</h3>
                <div className="text-gray-500 mb-2">Пн-Пт: 20:00-23:00</div>
                <div className="text-gray-500 mb-6">Сб-Вс: 18:00-23:00</div>
                <div className="text-3xl font-bold text-orange-600 mb-4">800 ₽</div>
                <p className="text-gray-600 text-sm">Доплата за работу в вечернее время</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-4">Ночное время</h3>
                <div className="text-gray-500 mb-2">Ежедневно:</div>
                <div className="text-gray-500 mb-6">23:00-8:00</div>
                <div className="text-3xl font-bold text-red-600 mb-4">1200 ₽</div>
                <p className="text-gray-600 text-sm">Круглосуточная служба экстренного ремонта</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <Icon name="CheckCircle" size={16} className="inline text-green-500 mr-1" />
              Диагностика бесплатно при заказе ремонта
            </p>
          </div>
        </div>
      </section>

      {/* Форма экстренного вызова */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Экстренная заявка</h2>
            <p className="text-xl text-red-100">Заполните форму, и мы перезвоним в течение 3 минут</p>
          </div>
          
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Тип техники *</label>
                  <select required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option value="">Выберите технику</option>
                    <option>Стиральная машина</option>
                    <option>Посудомоечная машина</option>
                    <option>Холодильник</option>
                    <option>Другая техника</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Описание проблемы *</label>
                  <textarea 
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Опишите детально что случилось с техникой"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Адрес</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Район, ближайшее метро или полный адрес"
                  />
                </div>
                
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold">
                  <Icon name="Phone" size={20} className="mr-2" />
                  СРОЧНЫЙ ВЫЗОВ - ПЕРЕЗВОНИТЕ МНЕ!
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}