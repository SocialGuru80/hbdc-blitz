import React from 'react';
import { Eye, ArrowRight, Play } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50" />
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern business district"
          className="w-full h-full object-cover"
        />
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-4 mb-6">
            <Eye className="h-12 w-12 text-secondary" />
            <h1 className="text-5xl md:text-7xl font-bold text-light">
              Horus <span className="gradient-text">BDC</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-light/90 mt-6 mb-8 max-w-2xl">
            Transforming business insights into actionable strategies through advanced analytics and AI-driven solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/20">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-light">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-light/80">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const metrics = [
  { label: 'Active Projects', value: '150+' },
  { label: 'Success Rate', value: '98%' },
  { label: 'Team Members', value: '50+' },
  { label: 'Global Clients', value: '200+' },
];