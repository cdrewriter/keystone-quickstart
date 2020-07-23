import React from 'react';

import PageLayout from '../templates/PageLayout';
import IntroSection from '../components/sections/IntroSection';
import WhySection from '../components/sections/WhySection';

const HomePage = () => {
  return (
    <PageLayout id="home-page">
      <IntroSection />
      <WhySection />
    </PageLayout>
  );
};

export default HomePage;
