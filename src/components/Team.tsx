import { useLanguage } from '../contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const team = [
    {
      name: t.team.members.member1.name,
      title: t.team.members.member1.title,
      designation: t.team.members.member1.designation,
      bio: t.team.members.member1.bio,
      image: '/tilaxmi1.jpg'
    },
    {
      name: t.team.members.member2.name,
      title: t.team.members.member2.title,
      designation: t.team.members.member2.designation,
      bio: t.team.members.member2.bio,
      image: '/anusha1.jpg'
    },
    {
      name: t.team.members.member3.name,
      title: t.team.members.member3.title,
      designation: t.team.members.member3.designation,
      bio: t.team.members.member3.bio,
      image: '/sabina.jpg'
    },
    {
      name: t.team.members.member4.name,
      title: t.team.members.member4.title,
      designation: t.team.members.member4.designation,
      bio: t.team.members.member4.bio,
      image: '/pragya1.jpg'
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
                <p className="text-green-600 font-semibold mb-1 text-sm">
                  {member.title}
                </p>
                <p className="text-gray-500 font-medium mb-3 text-xs">
                  {member.designation}
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
