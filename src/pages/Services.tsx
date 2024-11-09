import React from 'react';
import { Container } from '../components/ui/Container';
import { Brain, BarChart3, Users, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <div className="pt-16">
      <div className="relative py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-text/70">
              Comprehensive business solutions powered by advanced analytics and AI
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-light p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-text/70 mb-6">{service.description}</p>
              <div className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <div key={feature.title} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 mr-3" />
                    <div>
                      <div className="font-medium">{feature.title}</div>
                      <div className="text-sm text-text/70">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="secondary" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const services = [
  {
    title: 'AI Analytics',
    description: 'Harness the power of artificial intelligence to unlock valuable insights from your data.',
    icon: <Brain className="w-8 h-8 text-secondary" />,
    features: [
      {
        title: 'Predictive Analysis',
        description: 'Forecast trends and make data-driven decisions',
      },
      {
        title: 'Pattern Recognition',
        description: 'Identify complex patterns in your business data',
      },
      {
        title: 'Real-time Insights',
        description: 'Get instant analytics for immediate action',
      },
    ],
  },
  {
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights for strategic decision-making.',
    icon: <BarChart3 className="w-8 h-8 text-secondary" />,
    features: [
      {
        title: 'Custom Dashboards',
        description: 'Visualize your data in meaningful ways',
      },
      {
        title: 'Market Analysis',
        description: 'Understand market trends and opportunities',
      },
      {
        title: 'Performance Tracking',
        description: 'Monitor KPIs and business metrics',
      },
    ],
  },
  {
    title: 'Consulting Services',
    description: 'Expert guidance to optimize your business processes and strategy.',
    icon: <Users className="w-8 h-8 text-secondary" />,
    features: [
      {
        title: 'Strategy Planning',
        description: 'Develop comprehensive business strategies',
      },
      {
        title: 'Process Optimization',
        description: 'Streamline operations for better efficiency',
      },
      {
        title: 'Growth Solutions',
        description: 'Scale your business effectively',
      },
    ],
  },
  {
    title: 'Innovation Lab',
    description: 'Future-proof your business with cutting-edge technology solutions.',
    icon: <Lightbulb className="w-8 h-8 text-secondary" />,
    features: [
      {
        title: 'R&D Projects',
        description: 'Develop innovative solutions for complex problems',
      },
      {
        title: 'Digital Transformation',
        description: 'Modernize your business infrastructure',
      },
      {
        title: 'Tech Integration',
        description: 'Seamlessly integrate new technologies',
      },
    ],
  },
];