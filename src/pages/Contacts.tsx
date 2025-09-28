import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <Layout>
      <SEOHead
        title="Контакты сервиса ремонта техники"
        description="Контакты ТехСервис: телефон +7 (495) 123-45-67, работаем круглосуточно в Москве и МО. Адреса, график работы, способы связи с мастерами по ремонту бытовой техники."
        keywords="контакты ремонт техники, телефон мастера, адрес сервиса, ремонт техники москва контакты"
        canonicalUrl="https://techservice.ru/contacts"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MapPin" size={40} className="text-primary" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              Контакты <br />
              <span className="text-primary">ТехСервис</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом. Работаем круглосуточно 
              для решения ваших проблем с бытовой техникой.
            </p>
          </div>
        </div>
      </section>

      {/* Основные контакты */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Контактная информация */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Как с нами связаться</h2>
              
              <div className="space-y-8">
                {/* Телефон */}
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Phone" size={32} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Телефон</h3>
                        <p className="text-gray-600">Основная линия связи</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      <a href="tel:+74951234567" className="hover:underline">+7 (495) 123-45-67</a>
                    </div>
                    <p className="text-gray-600 mb-4">Круглосуточно, без выходных</p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                      <div>
                        <strong>Будни:</strong> 24/7<br />
                        <strong>Выходные:</strong> 24/7
                      </div>
                      <div>
                        <strong>Праздники:</strong> 24/7<br />
                        <strong>Ночные вызовы:</strong> 24/7
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon name="MessageCircle" size={32} className="text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">WhatsApp</h3>
                        <p className="text-gray-600">Быстрые сообщения</p>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-green-600 mb-2">
                      <a href="https://wa.me/74951234567" className="hover:underline">+7 (495) 123-45-67</a>
                    </div>
                    <p className="text-gray-600">Отправьте фото поломки для предварительной диагностики</p>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Icon name="Mail" size={32} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Email</h3>
                        <p className="text-gray-600">Электронная почта</p>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-blue-600 mb-2">
                      <a href="mailto:info@techservice.ru" className="hover:underline">info@techservice.ru</a>
                    </div>
                    <p className="text-gray-600">Ответим в течение часа в рабочее время</p>
                  </CardContent>
                </Card>

                {/* Адрес */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={32} className="text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Зона обслуживания</h3>
                        <p className="text-gray-600">Выезжаем по адресу</p>
                      </div>
                    </div>
                    <div className="text-xl font-bold text-purple-600 mb-2">Москва и Московская область</div>
                    <div className="text-gray-600">
                      <p>• В пределах МКАД: бесплатный выезд</p>
                      <p>• За МКАД: +30 ₽ за каждый км</p>
                      <p>• Максимальное удаление: 50 км от МКАД</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Форма обратной связи */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Напишите нам</h2>
              
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Введите ваше имя"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Тип техники</label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                        <option value="">Выберите тип техники</option>
                        <option>Стиральная машина</option>
                        <option>Посудомоечная машина</option>
                        <option>Холодильник</option>
                        <option>Другая техника</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение *</label>
                      <textarea 
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Опишите проблему с техникой, укажите адрес и удобное время для визита мастера"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-primary hover:bg-blue-700 text-white py-3 text-lg">
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* График работы */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">График работы</h2>
            <p className="text-lg text-gray-600">Мы работаем для вас круглосуточно</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-green-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" size={32} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Обычное время</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Понедельник - Пятница:</strong></p>
                  <p>8:00 - 20:00</p>
                  <p><strong>Суббота - Воскресенье:</strong></p>
                  <p>9:00 - 18:00</p>
                </div>
                <div className="mt-4 text-green-600 font-semibold">Стандартные тарифы</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Moon" size={32} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Вечернее время</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Понедельник - Пятница:</strong></p>
                  <p>20:00 - 23:00</p>
                  <p><strong>Суббота - Воскресенье:</strong></p>
                  <p>18:00 - 23:00</p>
                </div>
                <div className="mt-4 text-orange-600 font-semibold">+300 ₽ к тарифу</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Star" size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ночное время</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Ежедневно:</strong></p>
                  <p>23:00 - 8:00</p>
                  <p><strong>Экстренные случаи:</strong></p>
                  <p>Протечки, поломки</p>
                </div>
                <div className="mt-4 text-blue-600 font-semibold">+700 ₽ к тарифу</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Районы обслуживания */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Районы обслуживания</h2>
            <p className="text-lg text-gray-600">Выезжаем во все районы Москвы и Подмосковья</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Центральный АО</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Арбат</li>
                  <li>• Басманный</li>
                  <li>• Замоскворечье</li>
                  <li>• Красносельский</li>
                  <li>• Мещанский</li>
                  <li>• Пресненский</li>
                  <li>• Таганский</li>
                  <li>• Тверской</li>
                  <li>• Хамовники</li>
                  <li>• Якиманка</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Северный АО</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Аэропорт</li>
                  <li>• Беговой</li>
                  <li>• Бескудниковский</li>
                  <li>• Войковский</li>
                  <li>• Головинский</li>
                  <li>• Дегунино</li>
                  <li>• Коптево</li>
                  <li>• Левобережный</li>
                  <li>• Молжаниновский</li>
                  <li>• Савеловский</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Восточный АО</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Богородское</li>
                  <li>• Вешняки</li>
                  <li>• Гольяново</li>
                  <li>• Ивановское</li>
                  <li>• Измайлово</li>
                  <li>• Косино-Ухтомский</li>
                  <li>• Метрогородок</li>
                  <li>• Новогиреево</li>
                  <li>• Перово</li>
                  <li>• Соколиная Гора</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-center">Южный АО</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Бирюлево</li>
                  <li>• Братеево</li>
                  <li>• Даниловский</li>
                  <li>• Донской</li>
                  <li>• Зябликово</li>
                  <li>• Москворечье</li>
                  <li>• Нагатино</li>
                  <li>• Нагорный</li>
                  <li>• Орехово</li>
                  <li>• Царицыно</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              А также выезжаем в города Московской области:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>Балашиха</span>
              <span>Химки</span>
              <span>Королев</span>
              <span>Мытищи</span>
              <span>Люберцы</span>
              <span>Красногорск</span>
              <span>Одинцово</span>
              <span>Подольск</span>
              <span>Реутов</span>
              <span>и другие</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Готовы помочь прямо сейчас!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Не откладывайте ремонт техники. Звоните или оставляйте заявку — выезжаем в течение часа.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951234567">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </a>
            <a href="https://wa.me/74951234567">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}