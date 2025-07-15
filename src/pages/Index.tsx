import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-arch-black">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="font-heading font-bold text-2xl">ArchDesign</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Получить консультацию
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Архитектурно-строительное проектирование
          </Badge>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Создаём пространства
            <span className="block text-primary">будущего</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Профессиональное проектирование жилых комплексов, коммерческих зданий и промышленных объектов с использованием передовых технологий и инновационных решений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="FileText" className="mr-2 h-5 w-5" />
              Заказать проект
            </Button>
            <Button size="lg" variant="outline" className="border-arch-black hover:bg-arch-black hover:text-white">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                О нашей компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на создании архитектурных решений, которые сочетают в себе функциональность, эстетику и устойчивость.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Award" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">15+ лет опыта</h3>
                    <p className="text-sm text-gray-600">В сфере проектирования</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">50+ специалистов</h3>
                    <p className="text-sm text-gray-600">Команда профессионалов</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">200+ проектов</h3>
                    <p className="text-sm text-gray-600">Успешно реализовано</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="CheckCircle" className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">100% качество</h3>
                    <p className="text-sm text-gray-600">Гарантия результата</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                <img 
                  src="https://v3.fal.media/files/elephant/W4mVNRXmzPX352eidGHLn_output.png" 
                  alt="Архитектурный проект" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Compass" className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексный подход к архитектурному проектированию от концепции до реализации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Жилые дома и комплексы</CardTitle>
                <CardDescription>
                  Проектирование коттеджей, многоэтажных домов и жилых комплексов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Индивидуальные дома</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Многоквартирные дома</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Жилые комплексы</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Таунхаусы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Коммерческие здания</CardTitle>
                <CardDescription>
                  Офисные центры, торговые комплексы и бизнес-центры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Офисные центры</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Торговые комплексы</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Рестораны и кафе</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Гостиницы</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Factory" className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading">Промышленные объекты</CardTitle>
                <CardDescription>
                  Производственные здания, склады и логистические центры
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Производственные цеха</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Складские комплексы</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Логистические центры</li>
                  <li className="flex items-center"><Icon name="Check" className="h-4 w-4 text-primary mr-2" />Технические сооружения</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Портфолио проектов
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Примеры наших реализованных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src="/img/dddcca1d-cfb4-419c-8bb0-ca2959276937.jpg" 
                  alt="Жилой комплекс"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Жилой комплекс "Парк Вилладж"</CardTitle>
                <CardDescription>
                  Современный жилой комплекс с развитой инфраструктурой
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src="/img/82c7cd50-d9a7-4600-80aa-3234f9c13088.jpg" 
                  alt="Офисный центр"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Бизнес-центр "Технополис"</CardTitle>
                <CardDescription>
                  Инновационный офисный комплекс класса А
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] bg-gray-200">
                <img 
                  src="/img/b65ec114-0472-4754-b92b-d35d04282209.jpg" 
                  alt="Промышленный комплекс"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Логистический центр</CardTitle>
                <CardDescription>
                  Современный складской комплекс с автоматизацией
                </CardDescription>
              </CardHeader>
            </Card>
            
            {[4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-gray-200">
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                    <Icon name="Image" className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">Проект {item}</CardTitle>
                  <CardDescription>
                    Описание архитектурного проекта и его особенностей
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Готовы обсудить ваш проект? Мы всегда рады новым вызовам
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Контактная информация
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                    <span>info@archdesign.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary" />
                    <span>г. Москва, ул. Архитектурная, 1</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold mb-4">
                  Время работы
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Пн-Пт:</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб:</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Вс:</span>
                    <span>Выходной</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-heading text-xl font-semibold mb-6">
                Оставить заявку
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                    placeholder="Расскажите о вашем проекте..."
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-arch-black text-white px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">ArchDesign</h3>
              <p className="text-gray-400">
                Создаём архитектурные решения будущего
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Жилые дома</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Коммерческие здания</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Промышленные объекты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@archdesign.ru</p>
                <p>г. Москва, ул. Архитектурная, 1</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ArchDesign. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;