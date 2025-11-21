import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    {
      text: t.testimonials.testimonial1.text,
      author: t.testimonials.testimonial1.author,
      role: t.testimonials.testimonial1.role,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      text: t.testimonials.testimonial2.text,
      author: t.testimonials.testimonial2.author,
      role: t.testimonials.testimonial2.role,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=200'
    },
    {
      text: t.testimonials.testimonial3.text,
      author: t.testimonials.testimonial3.author,
      role: t.testimonials.testimonial3.role,
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=200'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
