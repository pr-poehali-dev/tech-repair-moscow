import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link, useParams } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  author: string;
  tags: string[];
  metaDescription: string;
}

const blogPosts: { [key: string]: BlogPost } = {
  "priznaki-polomki-stiralnoy-mashiny": {
    id: "1",
    title: "5 признаков поломки стиральной машины, которые нельзя игнорировать",
    content: `
      <h2>Почему важно обращать внимание на ранние признаки поломки</h2>
      <p>Стиральная машина — это сложная техника, которая работает в условиях высокой влажности и температуры. Раннее выявление проблем поможет избежать дорогостоящего ремонта и продлить срок службы устройства.</p>

      <h2>1. Необычные звуки во время работы</h2>
      <p><strong>Что слышите:</strong> Громкие стуки, скрежет, свист или гул, которых раньше не было.</p>
      <p><strong>Возможные причины:</strong></p>
      <ul>
        <li>Износ подшипников барабана</li>
        <li>Попадание инородных предметов (монеты, пуговицы)</li>
        <li>Разбалансировка барабана</li>
        <li>Ослабление креплений</li>
      </ul>
      <p><strong>Что делать:</strong> Немедленно остановите стирку и вызовите мастера. Работа с изношенными подшипниками может привести к полному выходу из строя барабана.</p>

      <h2>2. Проблемы с набором или сливом воды</h2>
      <p><strong>Признаки:</strong> Машина не набирает воду, набирает слишком медленно, не сливает воду или слив происходит очень медленно.</p>
      <p><strong>Возможные причины:</strong></p>
      <ul>
        <li>Засор в фильтре сливного насоса</li>
        <li>Проблемы с электромагнитным клапаном</li>
        <li>Засор в сливном шланге</li>
        <li>Неисправность помпы</li>
      </ul>

      <h2>3. Вибрация и "прыжки" машины</h2>
      <p>Если стиральная машина сильно вибрирует или даже "прыгает" во время отжима, это может указывать на серьезные проблемы с подвеской барабана или амортизаторами.</p>

      <h2>4. Проблемы с нагревом воды</h2>
      <p>Белье остается холодным после стирки, или наоборот — вода нагревается слишком сильно. Это может говорить о неисправности ТЭНа или датчика температуры.</p>

      <h2>5. Запах из барабана</h2>
      <p>Неприятный запах плесени или затхлости может указывать на проблемы с системой слива или необходимость профессиональной чистки.</p>

      <h2>Когда обращаться к мастеру</h2>
      <p>Не откладывайте вызов специалиста, если заметили любой из этих признаков. Раннее вмешательство часто позволяет решить проблему малой кровью и избежать дорогостоящей замены узлов.</p>

      <div class="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 class="font-bold text-lg mb-3">💡 Совет эксперта</h3>
        <p>Ведите журнал работы стиральной машины. Записывайте любые необычные звуки, запахи или поведение. Это поможет мастеру быстрее диагностировать проблему.</p>
      </div>
    `,
    date: "2024-09-25",
    category: "Стиральные машины",
    readTime: "5 мин",
    image: "/api/placeholder/800/400",
    slug: "priznaki-polomki-stiralnoy-mashiny",
    author: "Алексей Мастеров",
    tags: ["стиральная машина", "диагностика", "признаки поломки", "ремонт"],
    metaDescription: "Узнайте 5 главных признаков поломки стиральной машины, которые требуют немедленного вмешательства мастера. Экспертные советы по диагностике."
  },
  "holodilnik-ne-morozit-prichiny": {
    id: "2",
    title: "Почему холодильник не морозит: 7 основных причин",
    content: `
      <h2>Что делать, если холодильник перестал морозить</h2>
      <p>Холодильник, который не морозит — это серьезная проблема, требующая быстрого решения. Рассмотрим основные причины и способы их устранения.</p>

      <h2>1. Неправильная температура окружающей среды</h2>
      <p>Если холодильник стоит рядом с батареей или на солнце, он может не справляться с охлаждением. Оптимальная температура в помещении — 16-32°C.</p>

      <h2>2. Засор в системе вентиляции</h2>
      <p>Пыль на задней стенке и решетках мешает нормальному воздухообмену. Регулярно очищайте конденсатор и вентиляционные отверстия.</p>

      <h2>3. Неисправность компрессора</h2>
      <p>Если компрессор не включается или работает неправильно, холодильник не сможет поддерживать нужную температуру.</p>

      <h2>4. Утечка хладагента</h2>
      <p>Это серьезная неисправность, требующая профессионального ремонта. Признаки: холодильник работает постоянно, но не охлаждает.</p>

      <h2>5. Проблемы с термостатом</h2>
      <p>Неисправный термостат может неправильно определять температуру и не включать систему охлаждения когда нужно.</p>

      <h2>6. Засор в дренажной системе</h2>
      <p>Забитое дренажное отверстие может привести к образованию льда и нарушению циркуляции воздуха.</p>

      <h2>7. Износ уплотнителей дверцы</h2>
      <p>Поврежденные резиновые уплотнители пропускают теплый воздух, что снижает эффективность охлаждения.</p>

      <div class="bg-red-50 p-6 rounded-lg mt-8">
        <h3 class="font-bold text-lg mb-3">⚠️ Важно!</h3>
        <p>Не пытайтесь самостоятельно ремонтировать систему охлаждения. Работа с хладагентом требует специального оборудования и навыков.</p>
      </div>
    `,
    date: "2024-09-22",
    category: "Холодильники",
    readTime: "6 мин",
    image: "/api/placeholder/800/400",
    slug: "holodilnik-ne-morozit-prichiny",
    author: "Сергей Холодов",
    tags: ["холодильник", "не морозит", "компрессор", "хладагент"],
    metaDescription: "7 основных причин почему холодильник не морозит. Профессиональная диагностика и решения от экспертов по ремонту техники."
  }
};

const relatedPosts = [
  {
    title: "Как продлить срок службы бытовой техники",
    slug: "kak-prodlit-srok-sluzhby-tehniki",
    image: "/api/placeholder/300/200"
  },
  {
    title: "Замена подшипника в стиральной машине",
    slug: "zamena-podshipnika-stiralnaya-mashina",
    image: "/api/placeholder/300/200"
  },
  {
    title: "Очистка фильтров в посудомоечной машине",
    slug: "ochistka-filtrov-posudomoyka",
    image: "/api/placeholder/300/200"
  }
];

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPosts[slug]) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Статья не найдена</h1>
            <Link to="/blog">
              <Button>Вернуться к блогу</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const post = blogPosts[slug];

  return (
    <Layout>
      <SEOHead
        title={`${post.title} - Блог ТехСервис`}
        description={post.metaDescription}
        keywords={post.tags.join(", ")}
        canonicalUrl={`https://techservice.ru/blog/${post.slug}`}
      />
      
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-96 bg-gray-900">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
              <div className="mb-4">
                <Link to="/blog" className="text-blue-300 hover:text-blue-200 inline-flex items-center">
                  <Icon name="ChevronLeft" size={16} className="mr-1" />
                  Назад к блогу
                </Link>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-gray-300">
                <span className="bg-primary px-3 py-1 rounded-full text-white text-sm">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="User" size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold mb-4">Теги:</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 p-8 bg-primary text-white rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Нужна помощь с ремонтом техники?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Наши эксперты готовы решить любую проблему с вашей техникой
            </p>
            <Link to="/emergency">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                <Icon name="Phone" size={16} className="mr-2" />
                Вызвать мастера
              </Button>
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold text-center mb-12">Похожие статьи</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <div className="flex items-center text-primary font-medium mt-4">
                        <span>Читать далее</span>
                        <Icon name="ChevronRight" size={16} className="ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}