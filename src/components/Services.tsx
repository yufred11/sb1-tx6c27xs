import React from 'react';
import { Target, Compass, Users, Heart } from 'lucide-react';

const services = [
  {
    id: 'goal-setting',
    icon: Target,
    title: "Goal Setting",
    description: "Define clear objectives and create actionable plans to achieve your personal and professional goals.",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3"
  },
  {
    id: 'career-navigation',
    icon: Compass,
    title: "Career Navigation",
    description: "Get guidance on career transitions, leadership development, and professional growth strategies.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3"
  },
  {
    id: 'relationship-coaching',
    icon: Users,
    title: "Relationship Coaching",
    description: "Improve communication skills and build stronger personal and professional relationships.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3"
  },
  {
    id: 'spiritual-formation',
    icon: Heart,
    title: "Spiritual Formation",
    description: "Develop inner peace and spiritual awareness through mindfulness and personal growth practices.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Services</h2>
        <div className="space-y-20">
          {services.map((service) => (
            <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-12 items-center">
              <div className={`${service.id % 2 === 0 ? 'md:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-800">What you'll get:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Personalized one-on-one coaching sessions</li>
                    <li>Customized action plans and strategies</li>
                    <li>Regular progress assessments</li>
                    <li>Support materials and resources</li>
                  </ul>
                </div>
                <a
                  href="#appointment"
                  className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Book a Session
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;