import React from 'react';
import { Container } from '../components/ui/Container';
import { Users, Award, Globe, Target } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-16">
      <div className="relative py-20 bg-surface">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Horus BDC</h1>
            <p className="text-xl text-text/70">
              Leading the future of business intelligence with innovative solutions and expert insights.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-text/70 mb-8">
              At Horus BDC, we're committed to transforming businesses through advanced analytics and AI-driven solutions. Our mission is to empower organizations with actionable insights and innovative strategies for sustainable growth.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-text/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-20">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-text/70">{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

const stats = [
  { label: 'Years Experience', value: '15+' },
  { label: 'Global Clients', value: '200+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Success Rate', value: '98%' },
];

const values = [
  {
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions',
    icon: <Target className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Excellence',
    description: 'Delivering outstanding results consistently',
    icon: <Award className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Collaboration',
    description: 'Working together to achieve more',
    icon: <Users className="w-8 h-8 text-secondary" />,
  },
  {
    title: 'Global Impact',
    description: 'Making a difference worldwide',
    icon: <Globe className="w-8 h-8 text-secondary" />,
  },
];