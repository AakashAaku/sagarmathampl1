import { User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const team = [
    {
      name: t.team.members.ceo.name,
      title: t.team.members.ceo.title,
      bio: t.team.members.ceo.bio,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: t.team.members.cto.name,
      title: t.team.members.cto.title,
      bio: t.team.members.cto.bio,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: t.team.members.coo.name,
      title: t.team.members.coo.title,
      bio: t.team.members.coo.bio,
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: t.team.members.sustainability.name,
      title: t.team.members.sustainability.title,
      bio: t.team.members.sustainability.bio,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.team.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            {t.team.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3 text-sm">
                  {member.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
