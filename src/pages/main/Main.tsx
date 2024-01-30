import React from 'react';

import FirstSection from './components/FirstSection';
import CampaingnSection from './components/CampaignSection';
import LocationSection from './components/LocationSection';

import Root from '@components/ui/Root';
import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

export default function Main() {
  return (
    <Root>
      <Header />
      <FirstSection />
      <CampaingnSection />
      <LocationSection />
      <Footer />
    </Root>
  );
}