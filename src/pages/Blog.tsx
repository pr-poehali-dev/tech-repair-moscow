import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const articles: Article[] = [
  {
    id: "1",
    title: "5 признаков поломки стиральной машины, которые нельзя игнорировать",
    excerpt: "Узнайте, какие симптомы указывают на серьезные проблемы и требуют немедленного вмешательства мастера.",
    date: "2024-09-25",
    category: "Стиральные машины",
    readTime: "5 мин",
    image: "/api/placeholder/400/250",
    slug: "priznaki-polomki-stiralnoy-mashiny"
  },
  {
    id: "2",
    title: "Почему холодильник не морозит: 7 основных причин",
    excerpt: "Разбираем главные причины плохого охлаждения и когда можно справиться самостоятельно.",
    date: "2024-09-22",
    category: "Холодильники",
    readTime: "6 мин",
    image: "/api/placeholder/400/250",
    slug: "holodilnik-ne-morozit-prichiny"
  },
  {
    id: "3",
    title: "Посудомоечная машина плохо моет: решаем проблему пошагово",
    excerpt: "Простые способы улучшить качество мытья посуды и продлить срок службы техники.",
    date: "2024-09-20",
    category: "Посудомоечные машины",
    readTime: "4 мин",
    image: "/api/placeholder/400/250",
    slug: "posudomoyka-ploho-moet-reshenie"
  },
  {
    id: "4",
    title: "Как продлить срок службы бытовой техники: 10 простых правил",
    excerpt: "Профилактические меры, которые помогут избежать дорогостоящего ремонта.",
    date: "2024-09-18",
    category: "Общие советы",
    readTime: "7 мин",
    image: "/api/placeholder/400/250",
    slug: "kak-prodlit-srok-sluzhby-tehniki"
  },
  {
    id: "5",
    title: "Замена подшипника в стиральной машине: когда это необходимо",
    excerpt: "Признаки износа подшипника и почему эту работу лучше доверить профессионалам.",
    date: "2024-09-15",
    category: "Стиральные машины",
    readTime: "5 мин",
    image: "/api/placeholder/400/250",
    slug: "zamena-podshipnika-stiralnaya-mashina"
  },
  {
    id: "6",
    title: "Очистка фильтров в посудомоечной машине: инструкция",
    excerpt: "Пошаговое руководство по чистке фильтров для лучшей работы техники.",
    date: "2024-09-12",
    category: "Посудомоечные машины",
    readTime: "3 мин",
    image: "/api/placeholder/400/250",
    slug: "ochistka-filtrov-posudomoyka"
  }
];

const categories = ["Все статьи", "Стиральные машины", "Холодильники", "Посудомоечные машины", "Общие советы"];

export default function Blog() {
  return (
    <Layout>
      <SEOHead
        title="Блог о ремонте бытовой техники - Полезные советы и инструкции"
        description="Экспертные советы по ремонту и обслуживанию бытовой техники. Инструкции, признаки поломок, профилактика. Помощь от профессиональных мастеров."
        keywords="ремонт техники советы, обслуживание бытовой техники, признаки поломки, профилактика техники, инструкции по ремонту"
        canonicalUrl="https://techservice.ru/blog"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Блог о ремонте техники
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Полезные советы, инструкции и рекомендации от профессиональных мастеров 
                по ремонту и обслуживанию бытовой техники
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} to={`/blog/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 line-clamp-3 mb-4">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary font-medium">
                      <span>Читать далее</span>
                      <Icon name="ChevronRight" size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors">
              Загрузить еще статьи
            </button>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Подпишитесь на полезные советы
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Получайте новые статьи и советы по уходу за техникой на email
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="px-6 py-3 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}