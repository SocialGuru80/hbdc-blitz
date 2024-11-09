import React from 'react';
import { Container } from '../ui/Container';
import { Brain, BarChart3, Users, Lightbulb } from 'lucide-react';

export const ServiceSection = () => {
  return (
    <section className="py-24 bg-surface">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-text/70 max-w-2xl mx-auto">
            Comprehensive business solutions powered by advanced analytics and AI
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-light p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-text/70 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-text/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const services = [
  {
    title: 'AI Analytics',
    description: 'Advanced analytics powered by artificial intelligence',
    icon: <Brain className="w-6 h-6 text-secondary" />,
    features: ['Predictive Analysis', 'Pattern Recognition', 'Real-time Insights'],
  },
  {
    title: 'Business Intelligence',
    description: 'Transform data into actionable insights',
    icon: <BarChart3 className="w-6 h-6 text-secondary" />,
    features: ['Custom Dashboards', 'Market Analysis', 'Performance Tracking'],
  },
  {
    title: 'Consulting',
    description: 'Expert guidance for your business needs',
    icon: <Users className="w-6 h-6 text-secondary" />,
    features: ['Strategy Planning', 'Process Optimization', 'Growth Solutions'],
  },
  {
    title: 'Innovation Lab',
    description: 'Future-proof solutions for modern challenges',
    icon: <Lightbulb className="w-6 h-6 text-secondary" />,
    features: ['R&D Projects', 'Digital Transformation', 'Tech Integration'],
  },
];