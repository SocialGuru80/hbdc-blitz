import React from 'react';
import { HeroSlider } from '../components/home/HeroSlider';
import { ServiceSection } from '../components/home/ServiceSection';
import { ChatWidget } from '../components/chat/ChatWidget';

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <ServiceSection />
      <ChatWidget />
    </>
  );
};