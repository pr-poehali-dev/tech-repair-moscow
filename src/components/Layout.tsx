import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Wrench" size={28} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">ТехСервис</h1>
            </Link>
            
            <nav className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Главная
              </Link>
              <Link 
                to="/washing-machines" 
                className={`transition-colors ${isActive('/washing-machines') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Стиральные машины
              </Link>
              <Link 
                to="/dishwashers" 
                className={`transition-colors ${isActive('/dishwashers') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Посудомойки
              </Link>
              <Link 
                to="/refrigerators" 
                className={`transition-colors ${isActive('/refrigerators') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Холодильники
              </Link>
              <Link 
                to="/emergency" 
                className={`transition-colors ${isActive('/emergency') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Экстренный вызов
              </Link>
              <Link 
                to="/prices" 
                className={`transition-colors ${isActive('/prices') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Цены
              </Link>
              <Link 
                to="/contacts" 
                className={`transition-colors ${isActive('/contacts') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Контакты
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${isActive('/blog') ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`}
              >
                Блог
              </Link>
            </nav>
            
            <Link to="/emergency">
              <Button className="bg-primary hover:bg-blue-700 text-white px-6 py-2">
                <Icon name="Phone" size={16} className="mr-2" />
                Вызвать мастера
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-primary" />
                <h5 className="text-xl font-bold">ТехСервис</h5>
              </Link>
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
                <li><Link to="/washing-machines" className="hover:text-white transition-colors">Ремонт стиральных машин</Link></li>
                <li><Link to="/dishwashers" className="hover:text-white transition-colors">Ремонт посудомоечных машин</Link></li>
                <li><Link to="/refrigerators" className="hover:text-white transition-colors">Ремонт холодильников</Link></li>
                <li><Link to="/emergency" className="hover:text-white transition-colors">Экстренный выезд</Link></li>
              </ul>
            </div>
            
            <div>
              <h6 className="font-semibold mb-4">Информация</h6>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/prices" className="hover:text-white transition-colors">Цены</Link></li>
                <li><Link to="/warranty" className="hover:text-white transition-colors">Гарантии</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">О нас</Link></li>
                <li><Link to="/contacts" className="hover:text-white transition-colors">Контакты</Link></li>
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
  );
}