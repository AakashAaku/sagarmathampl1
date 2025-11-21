import { Apple, Wheat, Milk, Droplet, Flame } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Products() {
  const { t } = useLanguage();

  const products = [
    { icon: Apple, name: t.products.categories.vegetables, image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { icon: Apple, name: t.products.categories.fruits, image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { icon: Wheat, name: t.products.categories.grains, image: 'https://images.pexels.com/photos/3095857/pexels-photo-3095857.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { icon: Milk, name: t.products.categories.dairy, image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { icon: Droplet, name: t.products.categories.beverages, image: 'https://images.pexels.com/photos/1532299/pexels-photo-1532299.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { icon: Flame, name: t.products.categories.spices, image: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.products.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            {t.products.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
